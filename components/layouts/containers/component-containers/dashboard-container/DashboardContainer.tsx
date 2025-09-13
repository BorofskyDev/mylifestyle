import { Heading } from "@/components/ui";
import { InternalLink } from "@/components/ui/common/links/internal-link/InternalLink";
import { GenericPage } from "@/components/layouts";

export function DashboardContainer() {
    return (
      <GenericPage>
        <Heading element='h1' variant='page'>
          Welcome to My Lifestyle
        </Heading>
        <InternalLink href='/debt-tracker'>Go to Debt Tracker</InternalLink>
      </GenericPage>
    )
}