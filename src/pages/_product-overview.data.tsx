import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Images
import IconAIDraft from '@images/icons/aidraft.inline.svg'
import IconAnalytics from '@images/icons/chart.inline.svg'
import IconApproveLaunch from '@images/icons/approveandlaunch.inline.svg'
import IconChart from '@images/icons/chart.inline.svg'
import IconDesign from '@images/icons/design.inline.svg'
import IconPeople from '@images/icons/people.inline.svg'
import IconRocket from '@images/icons/rocket.inline.svg'
import IconSEO from '@images/icons/seo.inline.svg'
import IconWrench from '@images/icons/wrench.inline.svg'
import IconAI from '@images/icons/ai.inline.svg'
import IconCopywriting from '@images/icons/copywriting.inline.svg'

// Data
export const features = {
  title: 'Professional websites',
  text: 'Create meaningful connections with your audience online',
  image: (
    <StaticImage
      src="../images/professional-websites.png"
      alt="Professional websites"
      placeholder="blurred"
      layout="fullWidth"
      quality={100}
    />
  ),
  list: [
    {
      icon: <IconAI />,
      title: 'AI generates your site instantly',
      subtitle:
        'In 60 seconds, AI drafts a website based on your unique business and industry. Easily tweak its design, color palette, and fonts using the B12 Editor or get expert help.',
    },
    {
      icon: <IconRocket />,
      title: 'Get a boost from experts',
      subtitle:
        'B12 experts can customize your site’s design, copy, and SEO, so you stay focused on running your business. Offer feedback on your draft, then let us refine and launch your optimized website.',
    },
    {
      icon: <IconDesign />,
      title: 'Keep your website current',
      subtitle:
        'Keeping your website updated and cohesive has never been so easy. The B12 Editor is intuitive enough to make changes yourself, and our experts are available to help with maintenance.',
    },
    {
      icon: <IconCopywriting />,
      title: 'Draft content using AI',
      subtitle:
        'Create what your business needs in seconds with your built-in copilot — AI Assist. Use it to draft web pages, blog posts, service copy, and emails, so you spend less time writing and more time serving clients.',
    },
    {
      icon: <IconSEO />,
      title: 'Increase your online visibility',
      subtitle:
        'B12 websites are search-optimized from day one, so your business has a better shot at showing up in relevant searches. Effective SEO means more visitors and a better chance of gaining new clients.',
    },
    {
      icon: <IconChart />,
      title: 'Understand your analytics',
      subtitle:
        'Website analytics offer information your business can actually use. Reviewing these metrics helps you understand where your site succeeds, identify areas for improvement, and set new goals.',
    },
  ],
}

export const websiteProducts = [
  {
    title: 'We build the website you want to save you time',
    description:
      'B12 experts build your website for you, so you can focus on taking care of clients. Offer your feedback on design and copy, then let us customize and launch your mobile-friendly, search-optimized website in 30 days.',
    icon: <IconAIDraft />,
  },
  {
    title: 'Keep your website current',
    description:
      'Your website should grow and change alongside your business. B12 experts are always available to help you with website maintenance, or you can make changes yourself using the intuitive B12 Editor.',
    icon: <IconWrench />,
  },
  {
    title: 'Show up in search results',
    description:
      'All B12 websites are search-optimized from day one, so your business has a better shot at showing up in local and regional searches. Effective website SEO means more visitors and a better chance of gaining new clients.',
    icon: <IconSEO />,
  },
  {
    title: 'Appear in online directories',
    description:
      'Your SEO specialist submits your website and business information to up to 50 relevant online directories. We do this to establish high-quality links to your site, make you easier to find, and ensure your details are correct on directories like Google My Business.',
    icon: <IconRocket />,
  },
  {
    title: 'Understand your analytics',
    description:
      'Your website performance analytics offer information your business can actually use. Reviewing your metrics helps you understand where your site succeeds, identify areas for improvement, and set new goals.',
    icon: <IconAnalytics />,
  },
  {
    title: 'Enhance your functionality',
    description:
      'B12 provides seamless integrations with popular third-party tools, like Drift, Google Analytics, Medium, and more to ensure your website offers the precise functionality you need to serve clients online.',
    icon: <IconDesign />,
  },
]

export const creativeServices = [
  {
    title: 'Agency quality without agency prices',
    description:
      'Our in-house designers, copywriters, and SEO specialists are the best of the best. B12 accepts only the top 2% of experts to our platform and our AI helps them work 15x faster.',
    icon: <IconDesign />,
  },
  {
    title: 'Benefit from design expertise',
    description:
      'B12’s experienced designers set us apart from platforms that rely on templates. AI instantly sets you up with a website designed for your industry, while experts ensure it’s tailored to your unique business needs.',
    icon: <IconApproveLaunch />,
  },
  {
    title: 'Get website copy that converts',
    description:
      'Our copywriters create copy that strikes the perfect balance between accurately representing your company, selling your services, and enriching your site with search engine-optimized content.',
    icon: <IconChart />,
  },
  {
    title: 'Achieve better search rankings',
    description:
      'SEO experts optimize your website for search engines like Google, referencing specific keywords while also expanding your online footprint on relevant directories. Powerful SEO can lead to improved search rankings, traffic, and awareness of your business.',
    icon: <IconSEO />,
  },
  {
    title: 'Position yourself as an authority',
    description:
      'With B12’s help, publish blog posts that appeal to visitors and search engines alike. Use AI Assist or have experts write relevant content that shows search engines you’re an authority on topics and answers the questions your audience is searching for.',
    icon: <IconPeople />,
  },
]

export const ceTools = [
  {
    title: 'Schedule more appointments',
    text: 'Online scheduling software makes it simple to accept bookings directly on your website and automate recurring appointments. Easily set your availability, then get notified when a client schedules, reschedules, or cancels.',
    image: (
      <StaticImage
        src="../images/sem-features-image-5.png"
        alt="Schedule more appointments"
        placeholder="blurred"
        quality={100}
      />
    ),
  },
  {
    title: 'Expand your prospects',
    text: 'Customizable website forms are an effortless way to collect valuable information from prospects and organize interactions. Add an email address field to your form to build out your email subscriber list.',
    image: (
      <StaticImage
        src="../images/sem-features-image-4.png"
        alt="Schedule more appointments"
        placeholder="blurred"
        quality={100}
      />
    ),
  },
  {
    title: 'Keep track of contacts',
    text: 'Your contact manager helps you keep track of all prospects and clients, so you can ensure that each contact receives the right message that encourages them to take the next step with your business.',
    image: (
      <StaticImage
        src="../images/sem-features-image-8.png"
        alt="Schedule more appointments"
        placeholder="blurred"
        quality={100}
      />
    ),
  },
  {
    title: 'Convince visitors to convert',
    text: 'Banners and pop-ups encourage visitors to stay on your site and take the next step toward conversion, such as “sign up” or “schedule.” Exit intent pop-ups appear front and center, while announcement banners display a message at the top of your site.',
    image: (
      <StaticImage
        src="../images/sem-features-image-9.png"
        alt="Convince visitors to convert"
        placeholder="blurred"
        quality={100}
      />
    ),
  },
]
