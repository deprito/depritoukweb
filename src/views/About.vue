<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/Button.vue'
import Badge from '@/components/ui/Badge.vue'
import Accordion from '@/components/ui/Accordion.vue'
import Card from '@/components/ui/Card.vue'
import { RouterLink } from 'vue-router'

const values = [
  {
    icon: '🛡️',
    title: 'Security First',
    description: 'We practice what we preach. Our own infrastructure is a fortress, demonstrating our commitment to security excellence.'
  },
  {
    icon: '🎯',
    title: 'Adversary Mindset',
    description: 'To defeat threats, you must think like them. Our team operates with the mindset of sophisticated adversaries.'
  },
  {
    icon: '🤝',
    title: 'Partnership Approach',
    description: 'We view every engagement as a partnership, transferring knowledge and building internal capability.'
  },
  {
    icon: '📊',
    title: 'Measurable Results',
    description: 'Every engagement delivers metrics and KPIs that demonstrate security improvement and ROI.'
  }
]

const certifications = ref([
  { name: 'ISO 27001:2022', description: 'Information Security Management System', issuer: 'International Organization for Standardization' },
  { name: 'CREST', description: 'Certified Ethical Security Testing', issuer: 'Council of Registered Ethical Security Testers' },
  { name: 'OSCP', description: 'Offensive Security Certified Professional', issuer: 'Offensive Security' },
  { name: 'CISSP', description: 'Certified Information Systems Security Professional', issuer: '(ISC)²' },
  { name: 'CISA', description: 'Certified Information Systems Auditor', issuer: 'ISACA' },
  { name: 'CEH v12', description: 'Certified Ethical Hacker', issuer: 'EC-Council' }
])

const methodologies = [
  {
    id: 'mitre-attack',
    title: 'MITRE ATT&CK Framework',
    content: 'All our penetration testing and Red Team engagements map to the MITRE ATT&CK framework, providing comprehensive visibility into which tactics and techniques your organization can detect and respond to.'
  },
  {
    id: 'nist-csf',
    title: 'NIST Cybersecurity Framework',
    content: 'Our assessments align with NIST CSF functions: Identify, Protect, Detect, Respond, and Recover. This ensures a holistic approach to cybersecurity maturity.'
  },
  {
    id: 'owasp',
    title: 'OWASP Standards',
    content: 'For application security assessments, we follow OWASP standards including the OWASP Top 10, ASVS, and testing guides to ensure thorough coverage of web application vulnerabilities.'
  }
]
</script>

<template>
  <div class="pt-16">
    <!-- Hero -->
    <section class="section bg-cyber-darker">
      <div class="container-custom">
        <div class="max-w-4xl text-center">
          <Badge variant="primary" class="mb-4">ABOUT US</Badge>
          <h1 class="font-tech text-4xl md:text-6xl mb-6">
            <span class="text-primary">DEFENDING</span> THE DIGITAL FRONTIER
          </h1>
          <p class="text-xl text-muted-foreground">
            We are a team of certified cybersecurity professionals dedicated to protecting
            organizations against evolving threats through comprehensive security solutions.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission -->
    <section class="section bg-cyber-dark">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="font-tech text-3xl md:text-4xl mb-6">
              <span class="text-primary">OUR</span> MISSION
            </h2>
            <p class="text-lg text-muted-foreground mb-4">
              To empower organizations with the knowledge, tools, and capabilities needed to
              defend against sophisticated cyber threats.
            </p>
            <p class="text-lg text-muted-foreground mb-4">
              We believe that effective cybersecurity is not about products—it's about people,
              processes, and a strategic approach to risk management.
            </p>
            <p class="text-lg text-muted-foreground">
              Every engagement is an opportunity to transfer knowledge and build lasting
              security capability within our client organizations.
            </p>
          </div>
          <div class="border-2 border-border p-8">
            <h3 class="font-pixel text-lg text-primary mb-4">[ VISION ]</h3>
            <p class="text-muted-foreground">
              A world where organizations of all sizes have access to enterprise-grade
              cybersecurity protection, making the digital landscape safer for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section bg-cyber-darker">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="font-tech text-3xl md:text-4xl mb-4">
            <span class="text-primary">CORE</span> VALUES
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            v-for="value in values"
            :key="value.title"
            class="p-6 hover:border-primary transition-all"
          >
            <div class="text-4xl mb-4">{{ value.icon }}</div>
            <h3 class="font-tech text-xl text-primary mb-2">{{ value.title }}</h3>
            <p class="text-sm text-muted-foreground">{{ value.description }}</p>
          </Card>
        </div>
      </div>
    </section>

    <!-- Team Expertise -->
    <section class="section bg-cyber-dark">
      <div class="container-custom">
        <div class="max-w-4xl">
          <div class="text-center mb-12">
            <h2 class="font-tech text-3xl md:text-4xl mb-4">
              <span class="text-primary">TEAM</span> EXPERTISE
            </h2>
            <p class="text-muted-foreground">
              Our team holds certifications across all major cybersecurity domains and brings
              experience from protecting Fortune 500 companies, government agencies, and
              critical infrastructure.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="cert in certifications"
              :key="cert.name"
              class="border-2 border-border p-4 hover:border-primary transition-colors"
            >
              <div class="font-tech text-primary">{{ cert.name }}</div>
              <div class="text-sm text-muted-foreground mt-1">{{ cert.description }}</div>
              <div class="text-xs text-muted-foreground mt-2 font-mono">Issued by: {{ cert.issuer }}</div>
            </div>
          </div>

          <div class="mt-8 p-6 border-2 border-primary bg-primary/5">
            <p class="text-sm text-muted-foreground">
              <span class="text-primary font-mono">[ NOTE ]</span>
              For security reasons, we do not publicly disclose the identities or
              professional histories of our team members. This protects both our personnel
              and our clients from targeted social engineering attacks. Team credentials
              are shared with clients during the engagement onboarding process.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Methodologies -->
    <section class="section bg-cyber-darker">
      <div class="container-custom">
        <div class="max-w-4xl">
          <div class="text-center mb-12">
            <h2 class="font-tech text-3xl md:text-4xl mb-4">
              <span class="text-primary">FRAMEWORKS</span> & STANDARDS
            </h2>
            <p class="text-muted-foreground">
              Our assessments and methodologies align with internationally recognized
              frameworks and industry standards.
            </p>
          </div>

          <Accordion :items="methodologies" />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section bg-cyber-dark">
      <div class="container-custom">
        <div class="max-w-2xl text-center">
          <h2 class="font-tech text-3xl md:text-4xl mb-6">
            READY TO <span class="text-primary">SECURE</span> YOUR ORGANIZATION?
          </h2>
          <p class="text-muted-foreground mb-8">
            Let's discuss how our expertise can help protect your organization against
            modern cyber threats.
          </p>
          <RouterLink to="/contact">
            <Button variant="cyber" size="lg">
              &gt; Schedule Consultation
            </Button>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
