<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <div class="pt-16">
    <section class="section">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <h1 class="font-tech text-4xl md:text-5xl mb-8">
            <span class="text-primary">PRIVACY</span> POLICY
          </h1>

          <div class="space-y-8 text-muted-foreground">
            <div>
              <h2 class="font-tech text-xl text-primary mb-4">1. Information Collection</h2>
              <p>We collect information you provide directly to us, including name, company, email, and other contact details when you reach out through our contact form or request services.</p>
            </div>

            <div>
              <h2 class="font-tech text-xl text-primary mb-4">2. Information Use</h2>
              <p>We use the information collected to respond to your inquiries, provide requested services, and improve our offerings. We do not sell your personal data to third parties.</p>
            </div>

            <div>
              <h2 class="font-tech text-xl text-primary mb-4">3. Data Security</h2>
              <p>As a cybersecurity company, we implement industry-leading security measures to protect your data. All communications are encrypted in transit using TLS 1.3.</p>
            </div>

            <div>
              <h2 class="font-tech text-xl text-primary mb-4">4. Contact</h2>
              <p>For questions about this privacy policy or your personal data, contact us at privacy@cybershield.example.com</p>
            </div>

            <div>
              <h2 class="font-tech text-xl text-primary mb-4">5. Policy Updates</h2>
              <p>We may update this privacy policy from time to time. Continued use of our services constitutes acceptance of any changes.</p>
            </div>
          </div>

          <div class="mt-12">
            <RouterLink to="/">
              <Button variant="outline">Return Home</Button>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
