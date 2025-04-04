import AppBar from './AppBar/AppBar';
import Layout from './Layout/Layout';
import TaskForm from './TaskForm/TaskForm';
import TaskList from './TaskList/TaskList';

export default function App() {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
}
