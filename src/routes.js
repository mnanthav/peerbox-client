import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import Users from './components/Users';

const routes = [
    {
        path: '/',
        component: <Homepage />,
        exact: true
    },
    {
        path: '/dashboard',
        component: <Dashboard />
    },
    {
        path: '/login',
        component: <Users />
    }
];

export default routes;