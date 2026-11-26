// Central, editable content. Replace placeholder values with real company details.
export const company = {
  name: 'PrimeLine Digital',
  email: 'hello@primeline.digital', // placeholder — replace
  phone: '+00 000 000 0000', // placeholder — replace
  location: 'Remote-first · Serving clients worldwide', // placeholder
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'X', href: 'https://x.com' },
    { label: 'Behance', href: 'https://behance.net' },
  ],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

export const marqueeItems = [
  'Digital Strategy',
  'Web Development',
  'Ecommerce',
  'SEO',
  'Performance Marketing',
  'Social Media Marketing',
  'Video Production',
  'Content Creation',
  'Branding',
  'Graphic Design',
  'UI/UX Design',
  'Video Editing',
  'Motion Design'
]

export const stats = [
  { value: 20, suffix: '+', label: 'Projects delivered' },
  { value: 10, suffix: '+', label: 'Businesses powered' },
  { value: 2, suffix: '+', label: 'Years of experience' },
  { value: 10, suffix: '', label: 'Industries served' },
]

export const services = [
  {
    title: 'Digital Strategy',
    desc: 'Market, audience and channel strategy that turns ambition into a measurable growth roadmap.',
    tags: ['Research', 'Positioning', 'Growth Roadmap'],
  },
  {
    title: 'Website & Ecommerce Development',
    desc: 'Fast, custom-coded websites and online stores built to look exceptional and turn visitors into customers.',
    tags: ['Custom Coding', 'UI/UX Design', 'Ecommerce', 'WooCommerce', 'Shopify'],
  },
  {
    title: 'SEO',
    desc: 'Technical, content and authority SEO that earns lasting visibility where your buyers search.',
    tags: ['Technical SEO', 'Content SEO', 'Local SEO'],
  },
  {
    title: 'Performance Marketing',
    desc: 'Meta and Google ad campaigns built to generate leads and sales, tracked to revenue and optimised every week.',
    tags: ['Meta Ads', 'Google Ads', 'Lead Generation' , 'Ecommerce Ads', 'TikTok Ads' , 'LinkedIn Ads'],
  },
  {
    title: 'Social Media Marketing',
    desc: 'Platform-native content and paid social that builds your audience and drives real action.',
    tags: ['Organic', 'Community', 'Content Creation' , 'Video Content', 'Paid Social' , 'Influencer Marketing', 'Photoshoot' , 'Social Media Management' ],
  },
  {
    title: 'Branding, Graphic & UI/UX Design',
    desc: 'Brand identities, Ad creatives, print and interface designs with the edge to stand out and the consistency to scale.',
    tags: ['Logo & Identity', 'Creative Design' , 'Graphic Design', 'UI/UX Design'],
  },
  {
    title: 'Video Production, Editing & Motion Design',
    desc: 'Professional shoots, editing and motion graphics that make people stop, watch and act.',
    tags: ['Video Shoots, Photography, Video Editing, Motion Graphics, Reels, AI Videos'],
  },

]

export const reasons = [
  { title: 'Strategy First', desc: 'Every plan, idea and campaign starts with a clear goal and a roadmap to reach it, every month, every season.' },
  { title: 'CREATIVE THAT CONVERTS', desc: 'Graphics, video and motion design that grab attention, attract customers and increase your sales.' },
  { title: 'Technology That Performs', desc: 'Fast, modern, AI-powered websites and E Commerce stores, custom coded to lift your sales and grow your profit.' },
  { title: 'ROI-FOCUSED GROWTH', desc: 'We use data to track every result, organic and paid, down to every rupee, so your marketing keeps getting smarter.' },
  { title: 'ONE TEAM. 360° SOLUTIONS', desc: 'Marketing, Creative, Video Production, Motion Design, Web and E-Commerce under one roof.No need for multiple agencies.' },
  { title: 'Long-Term Partnership', desc: 'We act as an extension of your team, not a vendor.' },
]

export const process = [
  { title: 'Discover', desc: 'We learn your business, your customers and your competitors, then research the market to find where your biggest opportunities are.' },
  { title: 'Strategize', desc: 'We turn that research into a clear plan covering goals, channels, budget and content, so every step has a purpose.' },
  { title: 'Create', desc: 'Our team designs, shoots, edits and builds everything: graphics, videos, motion design, websites and ad creatives.' },
  { title: 'Launch', desc: 'We go live across organic and paid channels, with tracking set up from day one so every result is measured.' },
  { title: 'Grow', desc: 'We analyse the data, improve what works, cut what doesn\'t and scale your results, month after month.' },
]

export type Category = 'Web' | 'Branding' | 'SEO' | 'Marketing' | 'Ecommerce'
export const categories: ('All' | Category)[] = ['All', 'Web', 'Branding', 'SEO', 'Marketing', 'Ecommerce']

export interface Project {
  id: string
  client: string
  industry: string
  category: Category
  services: string[]
  desc: string
  variant: number
}

// DEMO projects — clearly sample work, not real clients.
export const projects: Project[] = [
  { id: 'p1', client: 'Sample Client — Aurelia', industry: 'Luxury Fragrance', category: 'Ecommerce', services: ['Web Design', 'Ecommerce', 'Paid Social'], desc: 'A conversion-focused storefront and launch campaign concept.', variant: 0 },
  { id: 'p2', client: 'Sample Client — Northstar', industry: 'Logistics', category: 'Web', services: ['UI/UX', 'Development'], desc: 'A fast, structured corporate platform with a quote workflow.', variant: 1 },
  { id: 'p3', client: 'Sample Client — Vantage', industry: 'Fitness', category: 'Branding', services: ['Identity', 'Creative'], desc: 'A bold identity system for a performance-led brand.', variant: 2 },
  { id: 'p4', client: 'Sample Client — Helix', industry: 'Healthcare', category: 'SEO', services: ['Technical SEO', 'Content'], desc: 'A search visibility programme for a multi-location provider.', variant: 3 },
  { id: 'p5', client: 'Sample Client — Ember', industry: 'Hospitality', category: 'Marketing', services: ['Google Ads', 'Social'], desc: 'Always-on lead generation for a restaurant group.', variant: 4 },
]

export const featured = {
  client: 'Sample Client — Aurelia',
  category: 'Ecommerce · Demo case study',
  services: ['Web Design', 'Ecommerce', 'SEO', 'Paid Media'],
  metrics: [
    { value: '+125%', label: 'Traffic' },
    { value: '+78%', label: 'Leads' },
    { value: '+42%', label: 'Conversion' },
  ],
  note: 'Illustrative sample figures for layout purposes only. Not real client results.',
}

export const testimonials = [
  { quote: 'Placeholder testimonial: PrimeLine made the whole process feel effortless and the result felt unmistakably ours.', name: 'Sample Name', role: 'Founder', company: 'Sample Company' },
  { quote: 'Placeholder testimonial: Clear strategy, sharp design and a team that stays accountable to the numbers.', name: 'Sample Name', role: 'Marketing Director', company: 'Sample Company' },
  { quote: 'Placeholder testimonial: Fast turnaround, excellent communication, and a site that finally reflects our ambition.', name: 'Sample Name', role: 'COO', company: 'Sample Company' },
  { quote: 'Placeholder testimonial: They brought structure to our growth and treated our budget like their own.', name: 'Sample Name', role: 'Head of Growth', company: 'Sample Company' },
]

export const insights = [
  { tag: 'SEO', title: 'What actually moves rankings in 2026', read: '6 min read' },
  { tag: 'Web', title: 'Why site speed is your quietest sales rep', read: '5 min read' },
  { tag: 'AI', title: 'Five automations every small team should ship first', read: '7 min read' },
]

export const budgets = ['Under $2k', '$2k – $5k', '$5k – $15k', '$15k – $50k', '$50k+', 'Not sure yet']
export const serviceOptions = services.map((s) => s.title)
