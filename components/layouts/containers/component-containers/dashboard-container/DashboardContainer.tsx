import { Heading, Icon, icons } from '@/components/ui'
import { InternalLink } from '@/components/ui/common/links/internal-link/InternalLink'
import { GenericPage } from '@/components/layouts'
import styles from './DashboardContainer.module.scss'

export function DashboardContainer() {
  return (
    <GenericPage className={styles.dashboardContainer}>
      <Heading element='h1' variant='page'>
        Welcome to My Lifestyle
      </Heading>
      <section id='main' className={styles.mainSection}>
        <div className={styles.appContainer}>
          <Icon path={icons.debt} className='icon-large stroke-ruby' />
          <InternalLink href='/debt-tracker' className='text-ruby'>Go to Debt Tracker</InternalLink>
        </div>
        <div className={styles.appContainer}>
          <Icon path={icons.budget} className='icon-large stroke-emerald' />
          <InternalLink href='/budget-tracker' className='text-emerald'>Go to Budget Tool</InternalLink>
        </div>
        <div className={styles.appContainer}>
          <Icon path={icons.jobSearch} className='icon-large stroke-orange' />
          <InternalLink href='/job-tracker' className='text-orange'>Go to Job Tracker</InternalLink>
        </div>
      </section>
    </GenericPage>
  )
}
