import UsersController  from './UsersController';
import DashboardController from './DashboardController';
import AppointmentsController from './AppointmentsController';
import CategoriesController from './CategoriesController';
import FeedbacksController from './FeedbacksController';
import TransactionsController from './TransactionsController';
const UserController= new UsersController();
const DashboardStatisticsController = new DashboardController();
const AppointmentController = new AppointmentsController();
const CategoryController = new CategoriesController();
const FeedbackController = new FeedbacksController();
const TransactionController = new TransactionsController();
export {
    UserController,
    DashboardStatisticsController,
    AppointmentController,
    CategoryController,
    FeedbackController,
    TransactionController
};