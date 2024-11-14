import Script from 'next/script'

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "InRealArt",
    "description": "Marketplace de NFT d'art de luxe & RWA",
    "url": "https://inrealart.com",
    "logo": "https://www.inrealart.com/img/logo-IRA.png",
    "sameAs": [
    "https://discord.gg/Au4bPCjY",
    "https://x.com/InRealArt/"
    ],
    "offers": {
    "@type": "Offer",
    "description": "Collection d'œuvres d'art physiques et numériques"
    }
  }

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}