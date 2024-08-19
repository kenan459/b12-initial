import BubbleImage from '@components/bubble-image/BubbleImage'
import Text from '@components/text/Text'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Images
import IconSetup from '@images/icons/setup.inline.svg'
import IconCheckmark from '@images/icons/checkmark-circle-dashed.inline.svg'
import IconSEO from '@images/icons/seo.inline.svg'
import IconApproveLaunch from '@images/icons/approveandlaunch.inline.svg'
import IconCopywriting from '@images/icons/copywriting.inline.svg'
import IconDesign from '@images/icons/design.inline.svg'

export const features = [
  {
    title: 'Add website page and sections',
    text: (
      <>
        <Text>
          Whether you’re drafting an entirely new About Us page or adding one more FAQ, service, or
          team member, simply name the page/section and AI Assist provides all the text for it.
        </Text>
        <Text small>
          ✨ Effective website copy enables potential clients to make informed decisions about
          working with you — helping you sell 24/7.
        </Text>
      </>
    ),
    linkText: 'Get started for free',
    linkUrl: 'https://b12.io/signup',
    image: (
      <BubbleImage
        type={1}
        image={
          <>
            <StaticImage
              className="bubble-image-desktop"
              src="../../images/web-page-services-preview.png"
              alt="Add website page and sections"
              placeholder="blurred"
              style={{ border: '1px solid #e8e7eb' }}
              quality={100}
            />
            <StaticImage
              className="bubble-image-mobile"
              src="../../images/web-page-services-preview.png"
              alt="Add website page and sections"
              placeholder="blurred"
              style={{ border: '1px solid #e8e7eb' }}
              quality={80}
            />
          </>
        }
      />
    ),
    reversed: false,
  },
  {
    title: 'Generate blog posts',
    text: (
      <>
        <Text>
          Provide your post’s title, tone of voice, and any keywords you want to include, and AI
          Assist will draft the entire article, summary, and SEO metadata for you in less than a
          minute.
        </Text>
        <Text small>
          ✨ Improve visibility on search engines and give your site the credibility it deserves by
          consistently publishing blog posts.
        </Text>
      </>
    ),
    linkText: 'Get started for free',
    linkUrl: 'https://b12.io/signup',
    image: (
      <BubbleImage
        type={4}
        align="right"
        image={
          <>
            <StaticImage
              className="bubble-image-desktop"
              src="../../images/generate-posts.png"
              alt="Generate blog posts"
              placeholder="blurred"
              quality={100}
              style={{ border: '1px solid #e8e7eb' }}
            />
            <StaticImage
              className="bubble-image-mobile"
              src="../../images/generate-posts.png"
              alt="Generate blog posts"
              placeholder="blurred"
              style={{ border: '1px solid #e8e7eb' }}
              quality={80}
            />
          </>
        }
      />
    ),
    reversed: true,
  },
  {
    title: 'Draft emails',
    text: (
      <>
        <Text>
          Share key points about the email you’re sending, and AI Assist writes a first draft, with
          all of the right headers, formatting, CTAs, and your branding included.
        </Text>
        <Text small>
          ✨ Reach contacts directly with enticing emails encouraging them to take the next step
          with your business.
        </Text>
      </>
    ),
    linkText: 'Get started for free',
    linkUrl: 'https://b12.io/signup',
    image: (
      <BubbleImage
        type={4}
        align="left"
        image={
          <>
            <StaticImage
              className="bubble-image-desktop"
              src="../../images/email-output-preview.png"
              alt="Draft emails"
              placeholder="blurred"
              quality={100}
              style={{ boxShadow: '0 0 16px rgb(0 0 0 / 10%' }}
            />
            <StaticImage
              className="bubble-image-mobile"
              src="../../images/email-output-preview.png"
              alt="Draft emails"
              placeholder="blurred"
              quality={80}
              style={{ boxShadow: '0 0 16px rgb(0 0 0 / 10%' }}
            />
          </>
        }
      />
    ),
    reversed: false,
  },
]

export const benefits = [
  {
    title: 'It’s built into your website',
    description:
      'AI Assist is available for every section and page of your website where you write text — no setup needed. Use it with only a few clicks without signing up for another new tool. Instantly regenerate or edit anything the AI writes for you.',
    icon: <IconApproveLaunch />,
  },
  {
    title: 'Saves time and resources',
    description:
      'Creating copy from scratch can take a lot of time, and if you’re hiring a content writer, money too. With AI Assist, the initial writing is automatically done fast. Edit your draft as needed, then move on to other important tasks.',
    icon: <IconCheckmark />,
  },
  {
    title: 'Boosts SEO',
    description:
      'Even if you have no SEO knowledge, AI Assist gives you a shot to rank well on search engines. It optimizes your content for keywords you provide and fills in SEO metadata like page title and description. Using AI Assist to publish content regularly can help your rankings see a boost.',
    icon: <IconSEO />,
  },
  {
    title: 'Keeps your site updated',
    description:
      'Up-to-date information about your services, team, and expertise shows potential clients and Google that your business is thriving. With AI Assist, keeping your copy current is a breeze.',
    icon: <IconDesign />,
  },
  {
    title: 'Includes facts about your business',
    description:
      'AI Assist pulls in details you’ve shared to craft new content for your business. It requires zero experience in AI prompting and minimal input to create a high-quality, relevant draft.',
    icon: <IconSetup />,
  },
  {
    title: 'Scales content output',
    description:
      'Produce more content across email, articles, and web pages without dedicating additional time to do it yourself. With AI Assist, creating copy takes minutes instead of hours.',
    icon: <IconCopywriting />,
  },
]

export const faqs = [
  {
    question: 'How do I use AI Assist to generate copy?',
    answer: (
      <>
        <p>
          B12’s AI Assist makes building a website, publishing a blog post, and connecting with
          contacts via email quick and easy, with no learning curve.
        </p>
        <p>
          Whether using AI Assist to improve your website, blog, or email, it’s available across the
          entire B12 platform, allowing you to create the content you need 40x faster than starting
          from scratch.
        </p>
        <p>
          Start by{' '}
          <a href="https://b12.io/dashboard/" target="_blank">
            logging in to B12
          </a>
          . In the Editor's left pane, navigate to the page or section where you want to add
          something new. Choose a desired tone and add minimal context before clicking "Generate
          text," seeing a draft in less than a minute, then spending a little time proofreading and
          refining your draft before publishing. Refer to this{' '}
          <a
            href="https://support.b12.io/en/articles/6992915-generating-text-with-help-from-ai-assist"
            target="_blank"
          >
            support article
          </a>{' '}
          for step-by-step instructions on how to use AI Assist for your desired use case.
        </p>
      </>
    ),
  },
  {
    question: 'Is AI Assist free?',
    answer: (
      <p>
        Yes! AI Assist is available on all B12 plans. Beyond AI Assist, you can use B12 to{' '}
        <a href="https://b12.io/signup/">launch a professional website</a> for free in as little as
        an hour. <a href="https://www.b12.io/pricing-page">Learn more</a> and compare all B12
        subscription options.
      </p>
    ),
  },
  {
    question: 'What are the best practices to follow when using AI Assist for content?',
    answer: (
      <>
        <p>
          AI Assist is an incredibly effective way to get a first draft of new website copy, a blog
          post, or an email, but it’s meant to be reviewed and refined by a human. Follow the steps
          below to improve your AI-generated drafts, and read more about the limitations of
          generative AI in our{' '}
          <a
            href="https://www.b12.io/how-we-ai/evaluation.html#limitations-of-this-evaluation"
            target="_blank"
          >
            AI handbook.
          </a>
        </p>
        <ol>
          <li>
            <b>Proofread.</b> Check the copy for anything contradicting your brand voice, offerings,
            and content.
          </li>
          <li>
            <b>Fact-check.</b> Drafts created by AI may contain inaccuracies, biases, and
            information that’s irrelevant to your business.
          </li>
          <li>
            <b>Add detail.</b> More detailed or niche prompts generally produce more specific copy.
            If your draft is vague or generic, regenerate using a more detailed prompt or manually
            add information as you edit.
          </li>
          <li>
            <b>Customize it.</b> No one else has your exact experience. Differentiate your business
            and make the copy your own by injecting it with your brand voice and unique expertise.
          </li>
          <li>
            <b>Look out for plagiarism.</b> As with any text you didn’t write yourself, we recommend
            using a{' '}
            <a href="https://www.grammarly.com/plagiarism-checker" target="_blank">
              plagiarism checker like Grammarly
            </a>{' '}
            to ensure the text is fresh.
          </li>
          <li>
            <b>Be cautious.</b> You’re responsible for any information you share with AI Assist and
            any generated text you use. Avoid sharing sensitive information with it.
          </li>
        </ol>
      </>
    ),
  },
]
