import EmptyState from '../components/EmptyState';
import UserLayout from './Layout';

const usersPage = () => {
  return (
    <UserLayout>
      <div className="hidden lg:block lg:pl-80 h-full">
        <EmptyState />
      </div>
    </UserLayout>
  );
};

export default usersPage;
