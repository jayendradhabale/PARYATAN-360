import DashboardLayout from '../components/dashboard/DashboardLayout';
import EmptyState from '../components/ui/EmptyState';

function DashboardFeaturePage({ role, title, description, children }) {
  return (
    <DashboardLayout role={role} title={title} description={description}>
      {children || <EmptyState title={`${title} tools are ready for integration.`} description="This dedicated workspace is in place. Connect its forms and visualisations to the backend data layer in the next implementation phase." />}
    </DashboardLayout>
  );
}

export default DashboardFeaturePage;
