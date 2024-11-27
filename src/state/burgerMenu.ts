import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

export default function useMobileState() {

  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  }

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
  };
}
