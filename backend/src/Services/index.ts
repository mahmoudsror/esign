import UsersService from './UsersService';
import AppointmentsService from './AppointmentsService';
import DashboardService from './DashboardService';
import CategoriesService from './CategoriesService';
import TransactionsService from './TransactionsService';
import FeedbacksService from './FeedbackService';
const usersService = new UsersService();
const appointmentsService = new AppointmentsService();
const dashboardService = new DashboardService();
const categoryService = new CategoriesService();
const transactionsService = new TransactionsService();
const feedbacksService = new FeedbacksService();
export {
    usersService,
    appointmentsService,
    dashboardService,
    categoryService,
    transactionsService,
    feedbacksService
    
}