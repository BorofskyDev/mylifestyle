import { Button, Heading, Icon, icons } from '@/components/ui'
import styles from './DebtTracker.module.scss'
import { GenericPage } from '@/components/layouts'

export function DebtTracker() {
  return (
    <GenericPage className='page-flex'>
      <div className={styles.debtTracker}>
        <Icon path={icons.debt} className='icon-large stroke-ruby' />
        <Heading element='h1' variant='page'>
          Debt Tracker
        </Heading>
      </div>

      <section id='main' className={styles.actionSection}>
        <Button
          variant='primary'
          type='button'
          ariaLabel='add debt'
          className={`btn-bg-ruby border-ruby text-ruby-2 ${styles.btn}`}
        >
          Add Debt{' '}
          <Icon path={icons.moneyBag} className='icon-small stroke-ruby-2' />
        </Button>
        <Button
          variant='primary'
          type='button'
          ariaLabel='make payment'
          className={`btn-bg-emerald border-emerald text-emerald-2 ${styles.btn}`}
        >
          Make Payment
          <Icon path={icons.payment} className='icon-small stroke-emerald-2' />
        </Button>
      </section>
    </GenericPage>
  )
}
