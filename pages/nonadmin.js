import Layout from '../components/Layout';
import RoleBasedComponent from '../components/RoleBasedComponent';

const NonAdmin = () => {
  return (
    <Layout>
      <RoleBasedComponent roles={['admin']}>
        <h1>Admins only!</h1>
      </RoleBasedComponent>
      <RoleBasedComponent roles={['finance_manager']}>
        <h1>Finance Managers only!</h1>
      </RoleBasedComponent>
      <RoleBasedComponent roles={['analyst']}>
        <h1>Analysts only!</h1>
      </RoleBasedComponent>
      <RoleBasedComponent roles={['user']}>
        <h1>User Content</h1>
      </RoleBasedComponent>
    </Layout>
  );
};

export default NonAdmin;
