export const dateFormat=function (date=new Date()) {
  return date.toLocaleDateString().replaceAll('/', '-');
}
