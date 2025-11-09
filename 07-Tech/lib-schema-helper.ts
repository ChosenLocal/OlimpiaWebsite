// /lib/schema.ts
export function asJsonLd(obj: unknown) {
  return {
    __html: JSON.stringify(obj)
  }
}
/* Usage in a React component:
  <script type="application/ld+json" dangerouslySetInnerHTML={asJsonLd(schema)} />
*/
