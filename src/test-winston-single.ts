import winston from "winston";
// import 'winston-daily-rotate-file'

/**
 * test3: 捕获错误
 */
// const logger = winston.createLogger({
//   level: 'debug',
//   format: winston.format.simple(),
//   transports: [
//     new winston.transports.Console()
//   ],
//   // exceptionHandlers: [
//   //   new winston.transports.File({
//   //     filename: 'error.log',
//   //   })
//   // ],
//   rejectionHandlers: [
//     new winston.transports.File({
//       filename: 'reject.log'
//     })
//   ]
// })
//
//   // throw new Error('xxx error xxx')
//   (async function () {
//     throw Error('yyy error')
//   })()
//
// logger.info('wuwuwwuwuw')
// logger.error('tetetetetette')
// logger.debug(888888)


/**
 * test2: 不同的logger实例
 */
// winston.loggers.add('console', {
//   format: winston.format.combine(
//     winston.format.colorize(),
//     winston.format.simple()
//   ),
//   transports: [
//     new winston.transports.Console()
//   ]
// })
//
// winston.loggers.add('file', {
//   format: winston.format.combine(
//     winston.format.timestamp(),
//     winston.format.json()
//   ),
//   transports: [
//     new winston.transports.File({
//       dirname: 'log4',
//       filename: 'test.log',
//       format: winston.format.json()
//     })
//   ]
// })
//
// const logger1 = winston.loggers.get('console')
// logger1.info('aaaaa')
// logger1.error('bbbbb')
//
// const logger2 = winston.loggers.get('file')
//
// logger2.info('xxxx')
// logger2.info('yyyy')

/**
 * test1: basic usage
 */
// const logger = winston.createLogger({
//   level: 'debug',
//   format: winston.format.combine(
//     winston.format.colorize(),
//     winston.format.simple()
//   ),
//   transports: [
//     new winston.transports.Console(),
//     // new winston.transports.DailyRotateFile({
//     //   level:'info',
//     //   dirname: 'log2',
//     //   filename: 'test-%DATE%.log',
//     //   datePattern: 'YYYY-MM-DD-HH-mm',
//     //   maxSize: '1k'
//     // })
//     new winston.transports.Http({
//       host: 'localhost',
//       port: '3000',
//       path: '/log'
//     })
//     // new winston.transports.File({
//     //   dirname: 'log',
//     //   filename: 'test.log',
//     //   maxsize: 1024
//     // })
//   ]
// })
//
// logger.info('wuwuwuwu')
// logger.error('tetetete')
// logger.debug(8888)