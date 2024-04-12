import type { Employee } from './allVisa/structure';

export const handleNextStep = (data: Employee) => {
  if (
    data.optReceipt.status === 'unsubmitted' ||
    data.optReceipt.status === 'rejected'
  ) {
    return 'Submit OPT receipt';
  } else if (data.optReceipt.status === 'pending') {
    return 'OPT Receipt: wait for HR approval';
  } else if (
    data.optEad.status === 'unsubmitted' ||
    data.optEad.status === 'rejected'
  ) {
    return 'Submit OPT EAD';
  } else if (data.optEad.status === 'pending') {
    return 'OPT EAD: wait for HR approval';
  } else if (
    data.i983.status === 'unsubmitted' ||
    data.i983.status === 'rejected'
  ) {
    return 'Submit I-983';
  } else if (data.i983.status === 'pending') {
    return 'I-983: wait for HR approval';
  } else if (
    data.i20.status === 'unsubmitted' ||
    data.i20.status === 'rejected'
  ) {
    return 'Submit I-20';
  } else if (data.i20.status === 'pending') {
    return 'I-20: wait for HR approval';
  } else if (
    data.optReceipt.status === 'approved' &&
    data.optEad.status === 'approved' &&
    data.i983.status === 'approved' &&
    data.i20.status === 'approved'
  ) {
    return 'All documents have been approved';
  }
};
