import FadeInner from "@/app/components/animations/fadeInner/fadeInner";

import "./hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <FadeInner>
        <p>Hey, I'm</p>
      </FadeInner>

      <FadeInner highlight>
        <h1>Dryha Andrii</h1>
      </FadeInner>

      <FadeInner>
        <p>
          I'm a Full Stack Developer with a higher education degree and hands-on
          experience building web and mobile applications from scratch. I
          specialize in React.js, React Native (Expo), Next.js, Node.js, and
          GraphQL, delivering end-to-end solutions including project setup,
          backend services, frontend interfaces, deployment, and analytics
          integration. I implement authentication, subscription payments,
          caching, offline-first logic, multilingual support, SEO optimization,
          and AI/third-party API integrations, ensuring performant,
          maintainable, and user-focused applications.
        </p>
      </FadeInner>
    </section>
  );
}
