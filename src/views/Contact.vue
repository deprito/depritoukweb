<script setup lang="ts">
import { ref } from 'vue'
import ContactForm from '@/components/sections/ContactForm.vue'
import Button from '@/components/ui/Button.vue'
import Badge from '@/components/ui/Badge.vue'
import Dialog from '@/components/ui/Dialog.vue'

const isDialogOpen = ref(false)

const leadMagnet = {
  title: '2026 Enterprise Phishing Threat Report',
  description: 'Get insights into the latest phishing trends, techniques, and defense strategies.',
  fields: [
    'Analysis of 10,000+ real phishing campaigns',
    'Emerging threat vectors and tactics',
    'Industry-specific vulnerability analysis',
    'Recommended defense strategies'
  ]
}

const handleDownload = () => {
  isDialogOpen.value = true
}

const handleDialogSubmit = (e: Event) => {
  // Handle email submission for lead magnet
  isDialogOpen.value = false
  // In production, this would submit to Formspree or similar
  console.log('Lead magnet requested')
}
</script>

<template>
  <div class="pt-16">
    <!-- Hero -->
    <section class="section bg-cyber-darker">
      <div class="container-custom">
        <div class="max-w-4xl text-center">
          <Badge variant="primary" class="mb-4">CONTACT US</Badge>
          <h1 class="font-tech text-4xl md:text-6xl mb-6">
            <span class="text-primary">INITIATE</span> SECURE COMMUNICATION
          </h1>
          <p class="text-xl text-muted-foreground">
            Ready to strengthen your security posture? Reach out and our team will respond
            within 24 hours.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <ContactForm />

    <!-- Lead Magnet -->
    <section class="section bg-cyber-darker">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="card-pixel p-8 border-primary">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge variant="primary" class="mb-4">FREE RESOURCE</Badge>
                <h2 class="font-tech text-2xl md:text-3xl text-primary mb-4">
                  {{ leadMagnet.title }}
                </h2>
                <p class="text-muted-foreground mb-6">
                  {{ leadMagnet.description }}
                </p>
                <ul class="space-y-2 mb-6">
                  <li
                    v-for="(field, i) in leadMagnet.fields"
                    :key="i"
                    class="flex items-start gap-2 text-sm"
                  >
                    <span class="text-primary">▸</span>
                    <span>{{ field }}</span>
                  </li>
                </ul>
                <Button variant="cyber" @click="handleDownload">
                  &gt; Download Free Report
                </Button>
              </div>
              <div class="border-2 border-border p-6 bg-cyber-dark">
                <div class="text-center">
                  <div class="text-6xl mb-4">📄</div>
                  <div class="font-mono text-sm text-muted-foreground">
                    [ PDF DOWNLOAD ]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Info -->
    <section class="section bg-cyber-dark">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="border-2 border-border p-6 text-center hover:border-primary transition-colors">
              <div class="text-3xl mb-4">📧</div>
              <h3 class="font-tech text-lg text-primary mb-2">Email</h3>
              <a href="mailto:secure@cybershield.example.com" class="text-muted-foreground hover:text-primary transition-colors">
                secure@cybershield.example.com
              </a>
            </div>
            <div class="border-2 border-border p-6 text-center hover:border-primary transition-colors">
              <div class="text-3xl mb-4">📞</div>
              <h3 class="font-tech text-lg text-primary mb-2">Phone</h3>
              <a href="tel:+1800CYBER00" class="text-muted-foreground hover:text-primary transition-colors">
                +1 (800) CYBER-00
              </a>
            </div>
            <div class="border-2 border-border p-6 text-center hover:border-primary transition-colors">
              <div class="text-3xl mb-4">🌐</div>
              <h3 class="font-tech text-lg text-primary mb-2">Hours</h3>
              <span class="text-muted-foreground">
                24/7 Emergency Response
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lead Magnet Dialog -->
    <Dialog v-model:open="isDialogOpen" title="Download Report">
      <div class="space-y-4">
        <p class="text-muted-foreground">
          Enter your email to receive the free report:
        </p>
        <form @submit.prevent="handleDialogSubmit" class="space-y-4">
          <div>
            <label class="block mb-2 font-tech text-lg">Email Address *</label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              class="w-full px-4 py-3 border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary font-mono"
            />
          </div>
          <div class="flex items-start gap-3">
            <input type="checkbox" required class="mt-1 w-5 h-5 border-2 border-border bg-background" />
            <span class="text-sm text-muted-foreground">
              I agree to receive cybersecurity updates and resources.
            </span>
          </div>
          <Button type="submit" variant="cyber" class="w-full">
            &gt; Send Download Link
          </Button>
        </form>
      </div>
    </Dialog>
  </div>
</template>
