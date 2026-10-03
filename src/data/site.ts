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
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

export const marqueeItems = [
  'Digital Strategy', 'Web Development', 'SEO', 'Google Ads', 'Social Media', 'Branding', 'AI Solutions',
]

export const stats = [
  { value: 50, suffix: '+', label: 'Projects delivered' },
  { value: 20, suffix: '+', label: 'Brands powered' },
  { value: 5, suffix: '+', label: 'Years of experience' },
  { value: 12, suffix: '', label: 'Industries served' },
]

export const services = [
  { title: 'Digital Strategy', desc: 'Market, audience and channel strategy that turns ambition into a measurable growth roadmap.', tags: ['Research', 'Positioning', 'Roadmaps'] },
  { title: 'Website Design & Development', desc: 'Fast, custom-built websites engineered to look exceptional and convert relentlessly.', tags: ['UI/UX', 'React', 'E-commerce'] },
  { title: 'SEO', desc: 'Technical, content and authority SEO that earns durable visibility where your buyers search.', tags: ['Technical SEO', 'Content', 'Local'] },
  { title: 'Google Ads / PPC', desc: 'Performance campaigns built around intent, tracked to revenue, optimised every week.', tags: ['Search', 'Shopping', 'Remarketing'] },
  { title: 'Social Media Marketing', desc: 'Platform-native content and paid social that builds audience and drives action.', tags: ['Organic', 'Paid Social', 'Community'] },
  { title: 'Branding & Creative Design', desc: 'Identities and visual systems with the edge to stand out and the discipline to scale.', tags: ['Identity', 'Guidelines', 'Motion'] },
  { title: 'Content & Creative', desc: 'Copy, photo, video and campaign creative that gives your brand a voice people remember.', tags: ['Copy', 'Video', 'Campaigns'] },
  { title: 'AI & Automation', desc: 'Workflows, chat and analytics automation that remove busywork and compound your output.', tags: ['Workflows', 'Chatbots', 'Reporting'] },
]

export const reasons = [
  { title: 'Strategy First', desc: 'Every pixel and campaign starts with a clear objective.' },
  { title: 'Design That Converts', desc: 'Beautiful is the baseline. Business results are the brief.' },
  { title: 'Technology That Performs', desc: 'Lean, fast, modern builds that hold up under pressure.' },
  { title: 'Data-Driven Growth', desc: 'We measure what matters and act on it, relentlessly.' },
  { title: 'Built For Scale', desc: 'Systems and foundations that grow when you do.' },
  { title: 'Long-Term Partnership', desc: 'We act as an extension of your team, not a vendor.' },
]

export const process = [
  { title: 'Discover', desc: 'Understand the business, audience and goals.' },
  { title: 'Strategize', desc: 'Build the digital strategy.' },
  { title: 'Create', desc: 'Design and develop the experience.' },
  { title: 'Launch', desc: 'Deploy and optimize.' },
  { title: 'Grow', desc: 'Measure, improve and scale.' },
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
