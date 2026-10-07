/**
 * Poily content-source client. poily.com owns the /blog presentation; Poily is
 * the content backend. Server-side only (App Router server components). Public
 * GraphQL — no auth. ISR: revalidate 60s so published edits appear within a minute.
 */
const POILY_API =
  process.env.POILY_API_URL ||
  'https://ju1sxvytc1.execute-api.us-east-1.amazonaws.com/dev/graphql'
const TENANT = process.env.POILY_TENANT || 'poily'

export interface BlogPostListItem {
  id: string
  slug: string
  title: string
  excerpt?: string | null
  coverImageUrl?: string | null
  publishedAt?: string | null
  readingTimeMin?: number | null
  authorName?: string | null
  tags?: string[] | null
}

export interface BlogPost extends BlogPostListItem {
  bodyHtml?: string | null
  metaTitle?: string | null
  metaDescription?: string | null
  ogImage?: string | null
  canonicalUrl?: string | null
}

async function gql<T>(
  query: string,
  variables: Record<string, unknown>,
  revalidate = 60,
): Promise<T> {
  const res = await fetch(POILY_API, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    next: { revalidate },
  })
  if (!res.ok) throw new Error(`Poily API ${res.status}`)
  const json = (await res.json()) as { data?: T; errors?: Array<{ message: string }> }
  if (json.errors?.length) throw new Error(json.errors[0].message)
  return json.data as T
}

export async function getBlogPosts(): Promise<BlogPostListItem[]> {
  try {
    const data = await gql<{ getPublicPosts: BlogPostListItem[] }>(
      `query ($t: String!) {
        getPublicPosts(tenantId: $t) {
          id slug title excerpt coverImageUrl publishedAt readingTimeMin authorName tags
        }
      }`,
      { t: TENANT },
    )
    return data.getPublicPosts ?? []
  } catch (err) {
    console.error('[poily] getBlogPosts failed:', err)
    return []
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const data = await gql<{ getPublicPost: BlogPost | null }>(
    `query ($t: String!, $s: String!) {
      getPublicPost(tenantId: $t, slug: $s) {
        id slug title excerpt bodyHtml coverImageUrl publishedAt readingTimeMin
        authorName tags metaTitle metaDescription ogImage canonicalUrl
      }
    }`,
    { t: TENANT, s: slug },
  )
  return data.getPublicPost
}

/* ── Plan registry (platformPlans) ─────────────────────────────────────────
 * Contract: Apps/handoffs/admin_mkt/PLAN_TOKENS_CONTRACT.md. The registry owns
 * the facts (names, prices, features, limits, trial terms); this site only
 * renders them. Never hardcode or retype any of it.
 */
export const PLATFORM_PLANS_QUERY = `query {
  platformPlans {
    key name description tierOrder trialDays
    prices { interval amount currency }
    features { key name category dataType included limitValue highlight displayOrder }
  }
}`

export interface PlatformPlanFeature {
  key: string
  name: string
  category?: string | null
  /** "boolean" | "metered" — a metered feature with limitValue null is UNLIMITED. */
  dataType: string
  included: boolean
  limitValue?: number | null
  highlight: boolean
  displayOrder: number
}

export interface PlatformPlan {
  key: string
  name: string
  description?: string | null
  tierOrder: number
  trialDays: number
  /** amount is in WHOLE currency units (79 = $79), not cents. */
  prices: { interval: string; amount: number; currency: string }[]
  features: PlatformPlanFeature[]
}

/** Public endpoint, exposed so the client can retry if the server fetch failed. */
export const POILY_API_URL = POILY_API

/** null = the feed was unreachable (render a fallback, never guessed numbers). */
export async function getPlatformPlans(): Promise<PlatformPlan[] | null> {
  try {
    // 5 min: a Plan Manager edit reaches the page well inside the contract's 1h ceiling.
    const data = await gql<{ platformPlans: PlatformPlan[] }>(PLATFORM_PLANS_QUERY, {}, 300)
    return data.platformPlans ?? []
  } catch (err) {
    console.error('[poily] getPlatformPlans failed:', err)
    return null
  }
}
