import { Heading } from "@/components/ui/";
import { InternalLink } from "@/components/ui/common/links/internal-link/InternalLink";


export default function Home() {
  return (
    <main>
      <Heading element='h1' variant='page'>Welcome to My Lifestyle</Heading>
    <InternalLink href='/debt-tracker'>Go to Debt Tracker</InternalLink>
    </main>
  );
}
