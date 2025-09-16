import { Button, Heading, Icon, icons } from '@/components/ui'
import styles from './DebtTracker.module.scss'
import { GenericPage } from '@/components/layouts'

export function DebtTracker() {
  return (
    <GenericPage>
      <div className={styles.debtTracker}>
        <Icon path={icons.debt} className='icon-large stroke-orange' />
        <Heading element='h1' variant='page'>
          Debt Tracker
        </Heading>
      </div>

      <section id='main' className={styles.actionSection}>
        <Button
          variant='primary'
          type='button'
          ariaLabel='add debt'
          className='btn-bg-ruby border-ruby text-ruby-2'
        >
          Add Debt
        </Button>
        <Button
          variant='primary'
          type='button'
          ariaLabel='make payment'
          className='btn-bg-emerald border-emerald text-emerald-2'
        >
          Make Payment
        </Button>
      </section>
    </GenericPage>
  )
}
