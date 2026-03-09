<script setup lang="ts">
import { ref, reactive, watch, onMounted, onUnmounted } from 'vue'
import Input from '@/components/ui/Input.vue'
import Textarea from '@/components/ui/Textarea.vue'
import Select from '@/components/ui/Select.vue'
import Button from '@/components/ui/Button.vue'

interface Props {
  isOpen: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  close: []
}>()

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/your-form-id'

interface FormData {
  name: string
  company: string
  email: string
  role: string
  service: string
  message: string
  consent: boolean
}

const form = reactive<FormData>({
  name: '',
  company: '',
  email: '',
  role: '',
  service: '',
  message: '',
  consent: false
})

const errors = reactive<Record<string, string>>({})
const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

const serviceOptions = [
  { value: '', label: 'Select a service...' },
  { value: 'red-teaming', label: 'Red Teaming' },
  { value: 'security-awareness', label: 'Security Awareness' },
  { value: 'phishing', label: 'Phishing Simulations' },
  { value: 'soc-assessment', label: 'SOC Assessment' },
  { value: 'outsourcing', label: 'Cybersecurity Outsourcing' },
  { value: 'other', label: 'Other' }
]

const roleOptions = [
  { value: '', label: 'Select your role...' },
  { value: 'ciso', label: 'CISO / C-Level Executive' },
  { value: 'it-director', label: 'IT / Security Director' },
  { value: 'manager', label: 'Security Manager' },
  { value: 'hr', label: 'HR / Compliance' },
  { value: 'other', label: 'Other' }
]

const resetForm = () => {
  Object.assign(form, {
    name: '',
    company: '',
    email: '',
    role: '',
    service: '',
    message: '',
    consent: false
  })
  Object.keys(errors).forEach(key => delete errors[key])
  submitSuccess.value = false
  submitError.value = ''
}

watch(() => props.isOpen, () => {
  if (props.isOpen) {
    resetForm()
  }
})

const closeModal = () => {
  emit('close')
}

const handleBackdropClick = (e: MouseEvent) => {
  if (e.target === e.currentTarget) {
    closeModal()
  }
}

const handleEscapeKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscapeKey)
})

const validateForm = (): boolean => {
  Object.keys(errors).forEach(key => delete errors[key])

  if (!form.name.trim()) {
    errors.name = 'Name is required'
  }
  if (!form.company.trim()) {
    errors.company = 'Company is required'
  }
  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Invalid email address'
  }
  if (!form.role) {
    errors.role = 'Please select your role'
  }
  if (!form.service) {
    errors.service = 'Please select a service'
  }
  if (!form.message.trim()) {
    errors.message = 'Message is required'
  }
  if (!form.consent) {
    errors.consent = 'You must agree to the privacy policy'
  }

  return Object.keys(errors).length === 0
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true
  submitError.value = ''

  try {
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        company: form.company,
        email: form.email,
        role: form.role,
        service: form.service,
        message: form.message
      })
    })

    if (response.ok) {
      submitSuccess.value = true
      // Auto close after success
      setTimeout(() => {
        closeModal()
      }, 2000)
    } else {
      const data = await response.json()
      submitError.value = data.error || 'Submission failed. Please try again.'
    }
  } catch (err) {
    submitError.value = 'Network error. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      @click="handleBackdropClick"
    >
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-cyber-darker/90 backdrop-blur-sm" />

      <!-- Modal Content -->
      <Transition
        enter-active-class="transition-transform duration-200"
        enter-from-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="transition-transform duration-200"
        leave-from-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
      >
        <div
          v-if="isOpen"
          class="relative bg-cyber-dark border-2 border-primary max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-cyber"
        >
          <!-- Header -->
          <div class="sticky top-0 bg-cyber-dark border-b-2 border-border p-6 flex items-center justify-between">
            <h2 class="font-tech text-xl text-primary">
              <span class="text-primary">INITIATE</span> CONTACT
            </h2>
            <button
              @click="closeModal"
              class="w-8 h-8 border-2 border-border hover:border-primary flex items-center justify-center transition-colors"
            >
              ✕
            </button>
          </div>

          <!-- Body -->
          <div class="p-6">
            <p class="text-muted-foreground mb-6">
              Ready to secure your organization? Fill out the form below and we'll respond within 24 hours.
            </p>

            <!-- Success Message -->
            <div v-if="submitSuccess" class="card-pixel p-6 mb-6 border-primary bg-primary/10">
              <div class="text-center">
                <div class="text-4xl mb-4">✓</div>
                <h3 class="font-tech text-xl text-primary mb-2">Transmission Successful</h3>
                <p class="text-muted-foreground">
                  Your message has been received. Our security team will contact you shortly.
                </p>
              </div>
            </div>

            <!-- Error Message -->
            <div v-if="submitError" class="card-pixel p-6 mb-6 border-destructive bg-destructive/10">
              <div class="text-center">
                <div class="text-4xl mb-4">✕</div>
                <h3 class="font-tech text-xl text-destructive mb-2">Transmission Failed</h3>
                <p class="text-muted-foreground">{{ submitError }}</p>
              </div>
            </div>

            <!-- Form -->
            <form v-if="!submitSuccess" @submit.prevent="handleSubmit" class="space-y-4">
              <!-- Name -->
              <div class="form-group">
                <label for="modal-name" class="form-label">NAME *</label>
                <Input
                  id="modal-name"
                  v-model="form.name"
                  placeholder="Enter your full name"
                  required
                />
                <p v-if="errors.name" class="form-error">{{ errors.name }}</p>
              </div>

              <!-- Company -->
              <div class="form-group">
                <label for="modal-company" class="form-label">COMPANY *</label>
                <Input
                  id="modal-company"
                  v-model="form.company"
                  placeholder="Enter your company name"
                  required
                />
                <p v-if="errors.company" class="form-error">{{ errors.company }}</p>
              </div>

              <!-- Email -->
              <div class="form-group">
                <label for="modal-email" class="form-label">EMAIL *</label>
                <Input
                  id="modal-email"
                  v-model="form.email"
                  type="email"
                  placeholder="Enter your work email"
                  required
                />
                <p v-if="errors.email" class="form-error">{{ errors.email }}</p>
              </div>

              <!-- Role -->
              <div class="form-group">
                <label for="modal-role" class="form-label">ROLE *</label>
                <Select
                  id="modal-role"
                  v-model="form.role"
                  :options="roleOptions"
                  placeholder="Select your role"
                  required
                />
                <p v-if="errors.role" class="form-error">{{ errors.role }}</p>
              </div>

              <!-- Service -->
              <div class="form-group">
                <label for="modal-service" class="form-label">SERVICE OF INTEREST *</label>
                <Select
                  id="modal-service"
                  v-model="form.service"
                  :options="serviceOptions"
                  placeholder="Select a service"
                  required
                />
                <p v-if="errors.service" class="form-error">{{ errors.service }}</p>
              </div>

              <!-- Message -->
              <div class="form-group">
                <label for="modal-message" class="form-label">MESSAGE *</label>
                <Textarea
                  id="modal-message"
                  v-model="form.message"
                  placeholder="Tell us about your security needs..."
                  :rows="3"
                  required
                />
                <p v-if="errors.message" class="form-error">{{ errors.message }}</p>
              </div>

              <!-- Consent -->
              <div class="form-group">
                <label class="flex items-start gap-3 cursor-pointer">
                  <input
                    v-model="form.consent"
                    type="checkbox"
                    class="mt-1 w-5 h-5 border-2 border-border bg-background"
                  />
                  <span class="text-sm text-muted-foreground">
                    I agree to the <RouterLink to="/privacy" class="text-primary hover:underline" @click="closeModal">Privacy Policy</RouterLink>
                    and consent to being contacted regarding cybersecurity services.
                  </span>
                </label>
                <p v-if="errors.consent" class="form-error">{{ errors.consent }}</p>
              </div>

              <!-- Submit -->
              <Button
                type="submit"
                variant="cyber"
                size="lg"
                class="w-full"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting" class="loading-pixel">
                  [ TRANSMITTING... ]
                </span>
                <span v-else>
                  &gt; Transmit Secure Message
                </span>
              </Button>
            </form>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
