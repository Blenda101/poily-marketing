/**
 * Availability: whether a thing the site describes can be used today.
 *
 * The site deliberately projects the total package — the shape of the platform, not only
 * the slice that is finished. That is a positioning decision and it stays. What does not
 * stay is a page that lets a customer believe an unbuilt capability is already theirs:
 * a tick in a comparison table and a bare "Yes" in an FAQ are the two most testable forms
 * a claim can take, and Poily's own knowledge base is the authority on which are true.
 *
 * So anything not yet shipped is marked, and the mark renders. Absent means available.
 */
export type Availability = 'roadmap'

/** Short pill, next to a name. */
export const ROADMAP_LABEL = 'On the roadmap'

/** Terse mark, inside a table cell or beside a card heading. */
export const ROADMAP_MARK = 'Roadmap'

/** Page-level note, wherever anything on the page is marked. */
export const ROADMAP_NOTE =
  'Marked “Roadmap” means planned, not built. Those parts are not available yet and are not included in a plan you buy today.'
