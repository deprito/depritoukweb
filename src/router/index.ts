import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        title: 'DepritoNet Security | Enterprise Cybersecurity Services',
        description: 'Enterprise cybersecurity services - Red Teaming, SOC Assessments, Security Awareness, Phishing Simulations, and Cybersecurity Outsourcing.'
      }
    },
    {
      path: '/services',
      name: 'services',
      redirect: '/#services'
    },
    {
      path: '/services/red-teaming',
      name: 'red-teaming',
      component: () => import('@/views/services/RedTeaming.vue'),
      meta: {
        title: 'Red Teaming Services | DepritoNet Security',
        description: 'Adversary simulation services that test your organization\'s detection and response capabilities using real-world TTPs.'
      }
    },
    {
      path: '/services/security-awareness',
      name: 'security-awareness',
      component: () => import('@/views/services/SecurityAwareness.vue'),
      meta: {
        title: 'Security Awareness Training | DepritoNet Security',
        description: 'Build a human firewall with comprehensive security awareness training and phishing simulations.'
      }
    },
    {
      path: '/services/phishing-simulations',
      name: 'phishing-simulations',
      component: () => import('@/views/services/PhishingSim.vue'),
      meta: {
        title: 'Phishing Simulations | DepritoNet Security',
        description: 'Test employee susceptibility with realistic phishing campaigns and detailed metrics reporting.'
      }
    },
    {
      path: '/services/soc-assessment',
      name: 'soc-assessment',
      component: () => import('@/views/services/SocAssessment.vue'),
      meta: {
        title: 'SOC Assessment Services | DepritoNet Security',
        description: 'Evaluate your Security Operations Center against industry standards with comprehensive gap analysis.'
      }
    },
    {
      path: '/services/outsourcing',
      name: 'outsourcing',
      component: () => import('@/views/services/Outsourcing.vue'),
      meta: {
        title: 'Cybersecurity Outsourcing | DepritoNet Security',
        description: 'Augment your team with skilled cybersecurity professionals available 24/7/365.'
      }
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('@/views/Privacy.vue'),
      meta: {
        title: 'Privacy Policy | DepritoNet Security'
      }
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('@/views/Terms.vue'),
      meta: {
        title: 'Terms of Service | DepritoNet Security'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue'),
      meta: {
        title: '404 - Page Not Found | DepritoNet Security'
      }
    }
  ]
})

// Update page title and meta description
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string || 'DepritoNet Security'

  // Update meta description
  const description = to.meta.description as string
  if (description) {
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', description)
  }

  next()
})

export default router
