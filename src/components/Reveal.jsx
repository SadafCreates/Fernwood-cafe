import { useReveal } from '../hooks/useReveal';

// Wraps any section so it fades + lifts in on scroll. Usage:
// <Reveal><SomeSection /></Reveal>
export default function Reveal({ children, className = '', as: Tag = 'div' }) {
  const { ref, isVisible } = useReveal();

  return (
    <Tag ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}>
      {children}
    </Tag>
  );
}
