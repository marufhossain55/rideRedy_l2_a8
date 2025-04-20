import { Customer } from '@prisma/client';
import prisma from '../../../utils/prisma';

const createCustomer = async (customerData: Customer) => {
  const isExist = await prisma.customer.findFirst({
    where: {
      email: customerData.email,
    },
  });

  if (isExist) {
    throw new Error('Customer Already Exist');
  }

  const result = await prisma.customer.create({
    data: customerData,
  });
  return result;
};
const getAllCustomer = async () => {
  const result = await prisma.customer.findMany();
  return result;
};
const getCustomerById = async (customerId: string) => {
  const isExist = await prisma.customer.findUnique({
    where: {
      customerId,
    },
  });

  if (!isExist) {
    throw new Error('Customer Not Found.');
  }
  const result = await prisma.customer.findUnique({
    where: {
      customerId,
    },
  });
  return result;
};

const updateCustomerById = async (
  customerId: string,
  customerData: Partial<Customer>
): Promise<Customer> => {
  const isExist = await prisma.customer.findUnique({
    where: {
      customerId,
    },
  });

  if (!isExist) {
    throw new Error('Customer Not Found.');
  }

  const result = await prisma.customer.update({
    where: {
      customerId,
    },
    data: customerData,
  });

  return result;
};
const deleteCustomerById = async (customerId: string): Promise<Customer> => {
  const isExist = await prisma.customer.findUnique({
    where: {
      customerId,
    },
  });

  if (!isExist) {
    throw new Error('Customer Not Found.');
  }

  const result = await prisma.customer.delete({
    where: {
      customerId,
    },
  });

  return result;
};

export const CustomerServices = {
  createCustomer,
  getAllCustomer,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById,
};
