import status from 'http-status';
import { CustomerServices } from './customer.service';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';

const createCustomer = catchAsync(async (req, res) => {
  const result = await CustomerServices.createCustomer(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: 'Customer created successfully',
    data: result,
  });
});
const getAllCustomer = catchAsync(async (req, res) => {
  const result = await CustomerServices.getAllCustomer();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Customers fetched successfully',
    data: result,
  });
});
const getCustomerById = catchAsync(async (req, res) => {
  const result = await CustomerServices.getCustomerById(req.params.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Customers fetched successfully',
    data: result,
  });
});
const updateCustomerById = catchAsync(async (req, res) => {
  const result = await CustomerServices.updateCustomerById(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Customer updated successfully',
    data: result,
  });
});
const deleteCustomerById = catchAsync(async (req, res) => {
  const result = await CustomerServices.deleteCustomerById(req.params.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Customer deleted successfully',
    data: result,
  });
});

export const CustomerController = {
  createCustomer,
  getAllCustomer,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById,
};
