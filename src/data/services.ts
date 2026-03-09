export const servicesData = {
  'red-teaming': {
    title: 'Red Teaming',
    icon: '⚔️',
    tagline: 'Adversary Simulation',
    description: 'Our Red Team operations simulate sophisticated, real-world attacks to test your organization\'s detection and response capabilities.',
    overview: 'Red Teaming goes beyond traditional penetration testing by adopting the perspective of a determined adversary. Our operators emulate the tactics, techniques, and procedures (TTPs) of real threat actors to identify gaps in your security posture that automated tools and standard assessments miss.',
    methodology: [
      {
        phase: 'Reconnaissance',
        description: 'Open-source intelligence gathering to identify attack surface and valuable targets.'
      },
      {
        phase: 'Initial Access',
        description: 'Exploiting vulnerabilities through phishing, credential attacks, or external perimeter weaknesses.'
      },
      {
        phase: 'Execution',
        description: 'Establishing persistence, escalating privileges, and moving laterally through the network.'
      },
      {
        phase: 'Objectives',
        description: 'Achieving mission goals such as data exfiltration, system compromise, or operational disruption.'
      },
      {
        phase: 'Reporting',
        description: 'Comprehensive debrief with Blue Team, including TTP analysis and remediation recommendations.'
      }
    ],
    deliverables: [
      'Executive Summary with risk scoring',
      'Full Technical Report with all TTPs documented',
      'Evidence package (screenshots, logs, captured data)',
      'MITRE ATT&CK mapping',
      'Prioritized remed roadmap',
      'Lessons Learned workshop'
    ],
    benefits: [
      'Test your Blue Team\'s detection and response capabilities',
      'Identify blind spots in your monitoring',
      'Validate security investments against real threats',
      'Compliance with regulatory requirements',
      'Improve overall security maturity'
    ],
    cta: 'Request Red Team Assessment'
  },

  'security-awareness': {
    title: 'Security Awareness Training',
    icon: '🎓',
    tagline: 'Build a Human Firewall',
    description: 'Transform your workforce from your biggest vulnerability into your strongest defense layer with comprehensive security awareness training.',
    overview: 'Despite technical controls, employees remain the primary target for cybercriminals. Our Security Awareness Program combines engaging content, real-world simulations, and measurable metrics to create a security-conscious culture throughout your organization.',
    methodology: [
      {
        phase: 'Baseline Assessment',
        description: 'Evaluate current security knowledge through simulated attacks and knowledge assessments.'
      },
      {
        phase: 'Customized Training',
        description: 'Develop role-based training modules tailored to your industry and specific threats.'
      },
      {
        phase: 'Ongoing Education',
        description: 'Deliver monthly micro-learning content, videos, and interactive modules.'
      },
      {
        phase: 'Reinforcement',
        description: 'Conduct periodic phishing simulations and knowledge checks to measure improvement.'
      },
      {
        phase: 'Reporting',
        description: 'Provide detailed analytics on program effectiveness and individual progress.'
      }
    ],
    deliverables: [
      'Baseline risk assessment report',
      'Custom training content library',
      'Learning Management System (LMS) integration',
      'Phishing simulation platform access',
      'Monthly progress reports',
      'Compliance tracking dashboard'
    ],
    benefits: [
      'Reduce phishing click rates by up to 80%',
      'Meet compliance training requirements',
      'Create a security-first culture',
      'Empower employees to recognize and report threats',
      'Protect against social engineering attacks'
    ],
    cta: 'Start Awareness Program'
  },

  'phishing-simulations': {
    title: 'Phishing Simulations',
    icon: '🎣',
    tagline: 'Social Engineering Testing',
    description: 'Test your organization\'s susceptibility to phishing attacks with realistic, controlled simulations that provide actionable insights.',
    overview: 'Phishing remains the #1 initial access vector for cyberattacks. Our phishing simulation platform creates realistic campaigns that test employee behavior without the risk. We provide detailed analytics to help you understand your vulnerability and measure improvement over time.',
    methodology: [
      {
        phase: 'Campaign Design',
        description: 'Select from 500+ templates or create custom scenarios relevant to your organization.'
      },
      {
        phase: 'Target Selection',
        description: 'Segment campaigns by department, role, or risk level for targeted testing.'
      },
      {
        phase: 'Execution',
        description: 'Launch campaigns with realistic landing pages and data capture forms.'
      },
      {
        phase: 'Education',
        description: 'Instant training moments for employees who click, plus broader educational content.'
      },
      {
        phase: 'Analysis',
        description: 'Detailed reporting on click rates, credential submissions, and vulnerable departments.'
      }
    ],
    deliverables: [
      'Campaign execution reports',
      'Department-level vulnerability analysis',
      'At-risk user identification',
      'Trend analysis over time',
      'Training recommendations',
      'Industry benchmarking'
    ],
    benefits: [
      'Identify vulnerable employees before attackers do',
      'Measure the effectiveness of security awareness training',
      'Reduce breach risk significantly',
      'Create teachable moments without risk',
      'Demonstrate security ROI to leadership'
    ],
    cta: 'Launch Phishing Simulation'
  },

  'soc-assessment': {
    title: 'SOC Assessment',
    icon: '🔍',
    tagline: 'Maturity Evaluation',
    description: 'Evaluate your Security Operations Center\'s capabilities against industry standards and receive a roadmap for improvement.',
    overview: 'A mature SOC is essential for detecting and responding to threats in real-time. Our SOC Assessment evaluates your people, processes, and technology against frameworks like MITRE ATT&CK, NIST, and industry best practices to identify gaps and create a prioritized improvement roadmap.',
    methodology: [
      {
        phase: 'Discovery',
        description: 'Document current SOC capabilities, tools, processes, and organizational structure.'
      },
      {
        phase: 'Framework Mapping',
        description: 'Evaluate against MITRE ATT&CK, NIST CSF, and SOC Capability Maturity Model.'
      },
      {
        phase: 'Gap Analysis',
        description: 'Identify coverage gaps, detection blind spots, and response inefficiencies.'
      },
      {
        phase: 'Tabletop Exercise',
        description: 'Test detection and response capabilities through simulated attack scenarios.'
      },
      {
        phase: 'Roadmap Development',
        description: 'Create a prioritized roadmap with short-term wins and long-term goals.'
      }
    ],
    deliverables: [
      'Current state assessment report',
      'Maturity model scorecard (1-5 scale)',
      'Gap analysis with severity ratings',
      'MITRE ATT&CK coverage heatmap',
      'Technology stack recommendations',
      'Multi-phase improvement roadmap'
    ],
    benefits: [
      'Understand your true detection and response capabilities',
      'Prioritize SOC investments for maximum impact',
      'Build a business case for additional resources',
      'Align with industry best practices',
      'Accelerate SOC maturity development'
    ],
    cta: 'Request SOC Assessment'
  },

  'outsourcing': {
    title: 'Cybersecurity Outsourcing',
    icon: '🤝',
    tagline: 'Staff Augmentation',
    description: 'Augment your internal team with skilled cybersecurity professionals available 24/7/365.',
    overview: 'The cybersecurity talent shortage is real. Our outsourcing services provide access to certified security professionals who can supplement your internal team or manage specific security functions. From SOC analysts to penetration testers, we deliver expertise on demand.',
    methodology: [
      {
        phase: 'Needs Assessment',
        description: 'Identify skill gaps, coverage requirements, and integration needs.'
      },
      {
        phase: 'Resource Matching',
        description: 'Select certified professionals with relevant industry experience.'
      },
      {
        phase: 'Onboarding',
        description: 'Integrate with your tools, processes, and team structure.'
      },
      {
        phase: 'Ongoing Management',
        description: 'Regular performance reviews, knowledge transfer, and quality assurance.'
      },
      {
        phase: 'Flexibility',
        description: 'Scale resources up or down based on changing requirements.'
      }
    ],
    deliverables: [
      'Dedicated security professionals',
      'Coverage during business hours or 24/7',
      'Regular status reports and metrics',
      'Knowledge transfer documentation',
      'Performance dashboards',
      'Flexible contract terms'
    ],
    benefits: [
      'Immediate access to certified expertise',
      'Scale security operations without hiring overhead',
      'Cover skills gaps in your existing team',
      '24/7 coverage without internal night shifts',
      'Cost-effective compared to full-time hires'
    ],
    roles: [
      'SOC Analysts (L1, L2, L3)',
      'SIEM Engineers',
      'Threat Hunters',
      'Penetration Testers',
      'Security Architects',
      'GRC Analysts',
      'Incident Responders'
    ],
    cta: 'Explore Staffing Options'
  }
}

export type ServiceKey = keyof typeof servicesData
