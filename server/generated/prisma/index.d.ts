
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model QuizSubmission
 * 
 */
export type QuizSubmission = $Result.DefaultSelection<Prisma.$QuizSubmissionPayload>
/**
 * Model StudentAnswer
 * 
 */
export type StudentAnswer = $Result.DefaultSelection<Prisma.$StudentAnswerPayload>
/**
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>
/**
 * Model TeacherRating
 * 
 */
export type TeacherRating = $Result.DefaultSelection<Prisma.$TeacherRatingPayload>
/**
 * Model NoteAccess
 * 
 */
export type NoteAccess = $Result.DefaultSelection<Prisma.$NoteAccessPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  teacher: 'teacher',
  student: 'student'
};

export type Role = (typeof Role)[keyof typeof Role]


export const QuestionOption: {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd'
};

export type QuestionOption = (typeof QuestionOption)[keyof typeof QuestionOption]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type QuestionOption = $Enums.QuestionOption

export const QuestionOption: typeof $Enums.QuestionOption

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizSubmission`: Exposes CRUD operations for the **QuizSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizSubmissions
    * const quizSubmissions = await prisma.quizSubmission.findMany()
    * ```
    */
  get quizSubmission(): Prisma.QuizSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentAnswer`: Exposes CRUD operations for the **StudentAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentAnswers
    * const studentAnswers = await prisma.studentAnswer.findMany()
    * ```
    */
  get studentAnswer(): Prisma.StudentAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacherRating`: Exposes CRUD operations for the **TeacherRating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherRatings
    * const teacherRatings = await prisma.teacherRating.findMany()
    * ```
    */
  get teacherRating(): Prisma.TeacherRatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.noteAccess`: Exposes CRUD operations for the **NoteAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NoteAccesses
    * const noteAccesses = await prisma.noteAccess.findMany()
    * ```
    */
  get noteAccess(): Prisma.NoteAccessDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Quiz: 'Quiz',
    Question: 'Question',
    QuizSubmission: 'QuizSubmission',
    StudentAnswer: 'StudentAnswer',
    Note: 'Note',
    TeacherRating: 'TeacherRating',
    NoteAccess: 'NoteAccess'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "quiz" | "question" | "quizSubmission" | "studentAnswer" | "note" | "teacherRating" | "noteAccess"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      QuizSubmission: {
        payload: Prisma.$QuizSubmissionPayload<ExtArgs>
        fields: Prisma.QuizSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSubmissionPayload>
          }
          findFirst: {
            args: Prisma.QuizSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSubmissionPayload>
          }
          findMany: {
            args: Prisma.QuizSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSubmissionPayload>[]
          }
          create: {
            args: Prisma.QuizSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSubmissionPayload>
          }
          createMany: {
            args: Prisma.QuizSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuizSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSubmissionPayload>
          }
          update: {
            args: Prisma.QuizSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.QuizSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuizSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSubmissionPayload>
          }
          aggregate: {
            args: Prisma.QuizSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizSubmission>
          }
          groupBy: {
            args: Prisma.QuizSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<QuizSubmissionCountAggregateOutputType> | number
          }
        }
      }
      StudentAnswer: {
        payload: Prisma.$StudentAnswerPayload<ExtArgs>
        fields: Prisma.StudentAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnswerPayload>
          }
          findFirst: {
            args: Prisma.StudentAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnswerPayload>
          }
          findMany: {
            args: Prisma.StudentAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnswerPayload>[]
          }
          create: {
            args: Prisma.StudentAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnswerPayload>
          }
          createMany: {
            args: Prisma.StudentAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnswerPayload>
          }
          update: {
            args: Prisma.StudentAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnswerPayload>
          }
          deleteMany: {
            args: Prisma.StudentAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnswerPayload>
          }
          aggregate: {
            args: Prisma.StudentAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentAnswer>
          }
          groupBy: {
            args: Prisma.StudentAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<StudentAnswerCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      TeacherRating: {
        payload: Prisma.$TeacherRatingPayload<ExtArgs>
        fields: Prisma.TeacherRatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherRatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherRatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherRatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherRatingPayload>
          }
          findFirst: {
            args: Prisma.TeacherRatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherRatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherRatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherRatingPayload>
          }
          findMany: {
            args: Prisma.TeacherRatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherRatingPayload>[]
          }
          create: {
            args: Prisma.TeacherRatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherRatingPayload>
          }
          createMany: {
            args: Prisma.TeacherRatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeacherRatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherRatingPayload>
          }
          update: {
            args: Prisma.TeacherRatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherRatingPayload>
          }
          deleteMany: {
            args: Prisma.TeacherRatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherRatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeacherRatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherRatingPayload>
          }
          aggregate: {
            args: Prisma.TeacherRatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherRating>
          }
          groupBy: {
            args: Prisma.TeacherRatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherRatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherRatingCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherRatingCountAggregateOutputType> | number
          }
        }
      }
      NoteAccess: {
        payload: Prisma.$NoteAccessPayload<ExtArgs>
        fields: Prisma.NoteAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteAccessPayload>
          }
          findFirst: {
            args: Prisma.NoteAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteAccessPayload>
          }
          findMany: {
            args: Prisma.NoteAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteAccessPayload>[]
          }
          create: {
            args: Prisma.NoteAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteAccessPayload>
          }
          createMany: {
            args: Prisma.NoteAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NoteAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteAccessPayload>
          }
          update: {
            args: Prisma.NoteAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteAccessPayload>
          }
          deleteMany: {
            args: Prisma.NoteAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NoteAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteAccessPayload>
          }
          aggregate: {
            args: Prisma.NoteAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoteAccess>
          }
          groupBy: {
            args: Prisma.NoteAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteAccessCountArgs<ExtArgs>
            result: $Utils.Optional<NoteAccessCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    quiz?: QuizOmit
    question?: QuestionOmit
    quizSubmission?: QuizSubmissionOmit
    studentAnswer?: StudentAnswerOmit
    note?: NoteOmit
    teacherRating?: TeacherRatingOmit
    noteAccess?: NoteAccessOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    quizzes: number
    quizSubmissions: number
    teacherRatings: number
    studentRatings: number
    notes: number
    noteAccesses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | UserCountOutputTypeCountQuizzesArgs
    quizSubmissions?: boolean | UserCountOutputTypeCountQuizSubmissionsArgs
    teacherRatings?: boolean | UserCountOutputTypeCountTeacherRatingsArgs
    studentRatings?: boolean | UserCountOutputTypeCountStudentRatingsArgs
    notes?: boolean | UserCountOutputTypeCountNotesArgs
    noteAccesses?: boolean | UserCountOutputTypeCountNoteAccessesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuizSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizSubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeacherRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherRatingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudentRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherRatingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNoteAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteAccessWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    questions: number
    submissions: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | QuizCountOutputTypeCountQuestionsArgs
    submissions?: boolean | QuizCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizSubmissionWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    answers: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAnswerWhereInput
  }


  /**
   * Count Type QuizSubmissionCountOutputType
   */

  export type QuizSubmissionCountOutputType = {
    answers: number
  }

  export type QuizSubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuizSubmissionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuizSubmissionCountOutputType without action
   */
  export type QuizSubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmissionCountOutputType
     */
    select?: QuizSubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizSubmissionCountOutputType without action
   */
  export type QuizSubmissionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAnswerWhereInput
  }


  /**
   * Count Type NoteCountOutputType
   */

  export type NoteCountOutputType = {
    accesses: number
  }

  export type NoteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accesses?: boolean | NoteCountOutputTypeCountAccessesArgs
  }

  // Custom InputTypes
  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteCountOutputType
     */
    select?: NoteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeCountAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteAccessWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    firstName: string | null
    lastName: string | null
    profilePicture: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    firstName: string | null
    lastName: string | null
    profilePicture: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    role: number
    firstName: number
    lastName: number
    profilePicture: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    firstName?: true
    lastName?: true
    profilePicture?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    firstName?: true
    lastName?: true
    profilePicture?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    firstName?: true
    lastName?: true
    profilePicture?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    role: $Enums.Role
    firstName: string | null
    lastName: string | null
    profilePicture: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    profilePicture?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quizzes?: boolean | User$quizzesArgs<ExtArgs>
    quizSubmissions?: boolean | User$quizSubmissionsArgs<ExtArgs>
    teacherRatings?: boolean | User$teacherRatingsArgs<ExtArgs>
    studentRatings?: boolean | User$studentRatingsArgs<ExtArgs>
    notes?: boolean | User$notesArgs<ExtArgs>
    noteAccesses?: boolean | User$noteAccessesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    profilePicture?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "role" | "firstName" | "lastName" | "profilePicture" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | User$quizzesArgs<ExtArgs>
    quizSubmissions?: boolean | User$quizSubmissionsArgs<ExtArgs>
    teacherRatings?: boolean | User$teacherRatingsArgs<ExtArgs>
    studentRatings?: boolean | User$studentRatingsArgs<ExtArgs>
    notes?: boolean | User$notesArgs<ExtArgs>
    noteAccesses?: boolean | User$noteAccessesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      quizzes: Prisma.$QuizPayload<ExtArgs>[]
      quizSubmissions: Prisma.$QuizSubmissionPayload<ExtArgs>[]
      teacherRatings: Prisma.$TeacherRatingPayload<ExtArgs>[]
      studentRatings: Prisma.$TeacherRatingPayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
      noteAccesses: Prisma.$NoteAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      role: $Enums.Role
      firstName: string | null
      lastName: string | null
      profilePicture: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quizzes<T extends User$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, User$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizSubmissions<T extends User$quizSubmissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$quizSubmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teacherRatings<T extends User$teacherRatingsArgs<ExtArgs> = {}>(args?: Subset<T, User$teacherRatingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studentRatings<T extends User$studentRatingsArgs<ExtArgs> = {}>(args?: Subset<T, User$studentRatingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends User$notesArgs<ExtArgs> = {}>(args?: Subset<T, User$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    noteAccesses<T extends User$noteAccessesArgs<ExtArgs> = {}>(args?: Subset<T, User$noteAccessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.quizzes
   */
  export type User$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * User.quizSubmissions
   */
  export type User$quizSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    where?: QuizSubmissionWhereInput
    orderBy?: QuizSubmissionOrderByWithRelationInput | QuizSubmissionOrderByWithRelationInput[]
    cursor?: QuizSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizSubmissionScalarFieldEnum | QuizSubmissionScalarFieldEnum[]
  }

  /**
   * User.teacherRatings
   */
  export type User$teacherRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRating
     */
    select?: TeacherRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRating
     */
    omit?: TeacherRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRatingInclude<ExtArgs> | null
    where?: TeacherRatingWhereInput
    orderBy?: TeacherRatingOrderByWithRelationInput | TeacherRatingOrderByWithRelationInput[]
    cursor?: TeacherRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherRatingScalarFieldEnum | TeacherRatingScalarFieldEnum[]
  }

  /**
   * User.studentRatings
   */
  export type User$studentRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRating
     */
    select?: TeacherRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRating
     */
    omit?: TeacherRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRatingInclude<ExtArgs> | null
    where?: TeacherRatingWhereInput
    orderBy?: TeacherRatingOrderByWithRelationInput | TeacherRatingOrderByWithRelationInput[]
    cursor?: TeacherRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherRatingScalarFieldEnum | TeacherRatingScalarFieldEnum[]
  }

  /**
   * User.notes
   */
  export type User$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * User.noteAccesses
   */
  export type User$noteAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteAccess
     */
    select?: NoteAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteAccess
     */
    omit?: NoteAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteAccessInclude<ExtArgs> | null
    where?: NoteAccessWhereInput
    orderBy?: NoteAccessOrderByWithRelationInput | NoteAccessOrderByWithRelationInput[]
    cursor?: NoteAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteAccessScalarFieldEnum | NoteAccessScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizAvgAggregateOutputType = {
    id: number | null
    teacherId: number | null
    timeLimit: number | null
    passingScore: number | null
  }

  export type QuizSumAggregateOutputType = {
    id: number | null
    teacherId: number | null
    timeLimit: number | null
    passingScore: number | null
  }

  export type QuizMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    teacherId: number | null
    timeLimit: number | null
    passingScore: number | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    teacherId: number | null
    timeLimit: number | null
    passingScore: number | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    title: number
    description: number
    teacherId: number
    timeLimit: number
    passingScore: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    id?: true
    teacherId?: true
    timeLimit?: true
    passingScore?: true
  }

  export type QuizSumAggregateInputType = {
    id?: true
    teacherId?: true
    timeLimit?: true
    passingScore?: true
  }

  export type QuizMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    teacherId?: true
    timeLimit?: true
    passingScore?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    teacherId?: true
    timeLimit?: true
    passingScore?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    teacherId?: true
    timeLimit?: true
    passingScore?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _avg?: QuizAvgAggregateInputType
    _sum?: QuizSumAggregateInputType
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: number
    title: string
    description: string | null
    teacherId: number
    timeLimit: number
    passingScore: number
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    teacherId?: boolean
    timeLimit?: boolean
    passingScore?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    submissions?: boolean | Quiz$submissionsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>



  export type QuizSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    teacherId?: boolean
    timeLimit?: boolean
    passingScore?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "teacherId" | "timeLimit" | "passingScore" | "isPublished" | "createdAt" | "updatedAt", ExtArgs["result"]["quiz"]>
  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    submissions?: boolean | Quiz$submissionsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      teacher: Prisma.$UserPayload<ExtArgs>
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      submissions: Prisma.$QuizSubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      teacherId: number
      timeLimit: number
      passingScore: number
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends Quiz$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends Quiz$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quiz model
   */
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'Int'>
    readonly title: FieldRef<"Quiz", 'String'>
    readonly description: FieldRef<"Quiz", 'String'>
    readonly teacherId: FieldRef<"Quiz", 'Int'>
    readonly timeLimit: FieldRef<"Quiz", 'Int'>
    readonly passingScore: FieldRef<"Quiz", 'Int'>
    readonly isPublished: FieldRef<"Quiz", 'Boolean'>
    readonly createdAt: FieldRef<"Quiz", 'DateTime'>
    readonly updatedAt: FieldRef<"Quiz", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz.questions
   */
  export type Quiz$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Quiz.submissions
   */
  export type Quiz$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    where?: QuizSubmissionWhereInput
    orderBy?: QuizSubmissionOrderByWithRelationInput | QuizSubmissionOrderByWithRelationInput[]
    cursor?: QuizSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizSubmissionScalarFieldEnum | QuizSubmissionScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
    quizId: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
    quizId: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    quizId: number | null
    text: string | null
    optionA: string | null
    optionB: string | null
    optionC: string | null
    optionD: string | null
    correctOption: $Enums.QuestionOption | null
    createdAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    quizId: number | null
    text: string | null
    optionA: string | null
    optionB: string | null
    optionC: string | null
    optionD: string | null
    correctOption: $Enums.QuestionOption | null
    createdAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    quizId: number
    text: number
    optionA: number
    optionB: number
    optionC: number
    optionD: number
    correctOption: number
    createdAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    quizId?: true
    text?: true
    optionA?: true
    optionB?: true
    optionC?: true
    optionD?: true
    correctOption?: true
    createdAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    quizId?: true
    text?: true
    optionA?: true
    optionB?: true
    optionC?: true
    optionD?: true
    correctOption?: true
    createdAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    quizId?: true
    text?: true
    optionA?: true
    optionB?: true
    optionC?: true
    optionD?: true
    correctOption?: true
    createdAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: number
    quizId: number
    text: string
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: $Enums.QuestionOption
    createdAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    text?: boolean
    optionA?: boolean
    optionB?: boolean
    optionC?: boolean
    optionD?: boolean
    correctOption?: boolean
    createdAt?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>



  export type QuestionSelectScalar = {
    id?: boolean
    quizId?: boolean
    text?: boolean
    optionA?: boolean
    optionB?: boolean
    optionC?: boolean
    optionD?: boolean
    correctOption?: boolean
    createdAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quizId" | "text" | "optionA" | "optionB" | "optionC" | "optionD" | "correctOption" | "createdAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
      answers: Prisma.$StudentAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quizId: number
      text: string
      optionA: string
      optionB: string
      optionC: string
      optionD: string
      correctOption: $Enums.QuestionOption
      createdAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'Int'>
    readonly quizId: FieldRef<"Question", 'Int'>
    readonly text: FieldRef<"Question", 'String'>
    readonly optionA: FieldRef<"Question", 'String'>
    readonly optionB: FieldRef<"Question", 'String'>
    readonly optionC: FieldRef<"Question", 'String'>
    readonly optionD: FieldRef<"Question", 'String'>
    readonly correctOption: FieldRef<"Question", 'QuestionOption'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
    where?: StudentAnswerWhereInput
    orderBy?: StudentAnswerOrderByWithRelationInput | StudentAnswerOrderByWithRelationInput[]
    cursor?: StudentAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentAnswerScalarFieldEnum | StudentAnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model QuizSubmission
   */

  export type AggregateQuizSubmission = {
    _count: QuizSubmissionCountAggregateOutputType | null
    _avg: QuizSubmissionAvgAggregateOutputType | null
    _sum: QuizSubmissionSumAggregateOutputType | null
    _min: QuizSubmissionMinAggregateOutputType | null
    _max: QuizSubmissionMaxAggregateOutputType | null
  }

  export type QuizSubmissionAvgAggregateOutputType = {
    id: number | null
    quizId: number | null
    studentId: number | null
    score: number | null
    timeTaken: number | null
  }

  export type QuizSubmissionSumAggregateOutputType = {
    id: number | null
    quizId: number | null
    studentId: number | null
    score: number | null
    timeTaken: number | null
  }

  export type QuizSubmissionMinAggregateOutputType = {
    id: number | null
    quizId: number | null
    studentId: number | null
    score: number | null
    timeTaken: number | null
    submittedAt: Date | null
  }

  export type QuizSubmissionMaxAggregateOutputType = {
    id: number | null
    quizId: number | null
    studentId: number | null
    score: number | null
    timeTaken: number | null
    submittedAt: Date | null
  }

  export type QuizSubmissionCountAggregateOutputType = {
    id: number
    quizId: number
    studentId: number
    score: number
    timeTaken: number
    submittedAt: number
    _all: number
  }


  export type QuizSubmissionAvgAggregateInputType = {
    id?: true
    quizId?: true
    studentId?: true
    score?: true
    timeTaken?: true
  }

  export type QuizSubmissionSumAggregateInputType = {
    id?: true
    quizId?: true
    studentId?: true
    score?: true
    timeTaken?: true
  }

  export type QuizSubmissionMinAggregateInputType = {
    id?: true
    quizId?: true
    studentId?: true
    score?: true
    timeTaken?: true
    submittedAt?: true
  }

  export type QuizSubmissionMaxAggregateInputType = {
    id?: true
    quizId?: true
    studentId?: true
    score?: true
    timeTaken?: true
    submittedAt?: true
  }

  export type QuizSubmissionCountAggregateInputType = {
    id?: true
    quizId?: true
    studentId?: true
    score?: true
    timeTaken?: true
    submittedAt?: true
    _all?: true
  }

  export type QuizSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizSubmission to aggregate.
     */
    where?: QuizSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSubmissions to fetch.
     */
    orderBy?: QuizSubmissionOrderByWithRelationInput | QuizSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizSubmissions
    **/
    _count?: true | QuizSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizSubmissionMaxAggregateInputType
  }

  export type GetQuizSubmissionAggregateType<T extends QuizSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizSubmission[P]>
      : GetScalarType<T[P], AggregateQuizSubmission[P]>
  }




  export type QuizSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizSubmissionWhereInput
    orderBy?: QuizSubmissionOrderByWithAggregationInput | QuizSubmissionOrderByWithAggregationInput[]
    by: QuizSubmissionScalarFieldEnum[] | QuizSubmissionScalarFieldEnum
    having?: QuizSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizSubmissionCountAggregateInputType | true
    _avg?: QuizSubmissionAvgAggregateInputType
    _sum?: QuizSubmissionSumAggregateInputType
    _min?: QuizSubmissionMinAggregateInputType
    _max?: QuizSubmissionMaxAggregateInputType
  }

  export type QuizSubmissionGroupByOutputType = {
    id: number
    quizId: number
    studentId: number
    score: number
    timeTaken: number
    submittedAt: Date
    _count: QuizSubmissionCountAggregateOutputType | null
    _avg: QuizSubmissionAvgAggregateOutputType | null
    _sum: QuizSubmissionSumAggregateOutputType | null
    _min: QuizSubmissionMinAggregateOutputType | null
    _max: QuizSubmissionMaxAggregateOutputType | null
  }

  type GetQuizSubmissionGroupByPayload<T extends QuizSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], QuizSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type QuizSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    studentId?: boolean
    score?: boolean
    timeTaken?: boolean
    submittedAt?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    answers?: boolean | QuizSubmission$answersArgs<ExtArgs>
    _count?: boolean | QuizSubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizSubmission"]>



  export type QuizSubmissionSelectScalar = {
    id?: boolean
    quizId?: boolean
    studentId?: boolean
    score?: boolean
    timeTaken?: boolean
    submittedAt?: boolean
  }

  export type QuizSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quizId" | "studentId" | "score" | "timeTaken" | "submittedAt", ExtArgs["result"]["quizSubmission"]>
  export type QuizSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    answers?: boolean | QuizSubmission$answersArgs<ExtArgs>
    _count?: boolean | QuizSubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuizSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizSubmission"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
      answers: Prisma.$StudentAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quizId: number
      studentId: number
      score: number
      timeTaken: number
      submittedAt: Date
    }, ExtArgs["result"]["quizSubmission"]>
    composites: {}
  }

  type QuizSubmissionGetPayload<S extends boolean | null | undefined | QuizSubmissionDefaultArgs> = $Result.GetResult<Prisma.$QuizSubmissionPayload, S>

  type QuizSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizSubmissionCountAggregateInputType | true
    }

  export interface QuizSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizSubmission'], meta: { name: 'QuizSubmission' } }
    /**
     * Find zero or one QuizSubmission that matches the filter.
     * @param {QuizSubmissionFindUniqueArgs} args - Arguments to find a QuizSubmission
     * @example
     * // Get one QuizSubmission
     * const quizSubmission = await prisma.quizSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizSubmissionFindUniqueArgs>(args: SelectSubset<T, QuizSubmissionFindUniqueArgs<ExtArgs>>): Prisma__QuizSubmissionClient<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizSubmissionFindUniqueOrThrowArgs} args - Arguments to find a QuizSubmission
     * @example
     * // Get one QuizSubmission
     * const quizSubmission = await prisma.quizSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizSubmissionClient<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSubmissionFindFirstArgs} args - Arguments to find a QuizSubmission
     * @example
     * // Get one QuizSubmission
     * const quizSubmission = await prisma.quizSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizSubmissionFindFirstArgs>(args?: SelectSubset<T, QuizSubmissionFindFirstArgs<ExtArgs>>): Prisma__QuizSubmissionClient<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSubmissionFindFirstOrThrowArgs} args - Arguments to find a QuizSubmission
     * @example
     * // Get one QuizSubmission
     * const quizSubmission = await prisma.quizSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizSubmissionClient<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizSubmissions
     * const quizSubmissions = await prisma.quizSubmission.findMany()
     * 
     * // Get first 10 QuizSubmissions
     * const quizSubmissions = await prisma.quizSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizSubmissionWithIdOnly = await prisma.quizSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizSubmissionFindManyArgs>(args?: SelectSubset<T, QuizSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizSubmission.
     * @param {QuizSubmissionCreateArgs} args - Arguments to create a QuizSubmission.
     * @example
     * // Create one QuizSubmission
     * const QuizSubmission = await prisma.quizSubmission.create({
     *   data: {
     *     // ... data to create a QuizSubmission
     *   }
     * })
     * 
     */
    create<T extends QuizSubmissionCreateArgs>(args: SelectSubset<T, QuizSubmissionCreateArgs<ExtArgs>>): Prisma__QuizSubmissionClient<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizSubmissions.
     * @param {QuizSubmissionCreateManyArgs} args - Arguments to create many QuizSubmissions.
     * @example
     * // Create many QuizSubmissions
     * const quizSubmission = await prisma.quizSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizSubmissionCreateManyArgs>(args?: SelectSubset<T, QuizSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuizSubmission.
     * @param {QuizSubmissionDeleteArgs} args - Arguments to delete one QuizSubmission.
     * @example
     * // Delete one QuizSubmission
     * const QuizSubmission = await prisma.quizSubmission.delete({
     *   where: {
     *     // ... filter to delete one QuizSubmission
     *   }
     * })
     * 
     */
    delete<T extends QuizSubmissionDeleteArgs>(args: SelectSubset<T, QuizSubmissionDeleteArgs<ExtArgs>>): Prisma__QuizSubmissionClient<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizSubmission.
     * @param {QuizSubmissionUpdateArgs} args - Arguments to update one QuizSubmission.
     * @example
     * // Update one QuizSubmission
     * const quizSubmission = await prisma.quizSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizSubmissionUpdateArgs>(args: SelectSubset<T, QuizSubmissionUpdateArgs<ExtArgs>>): Prisma__QuizSubmissionClient<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizSubmissions.
     * @param {QuizSubmissionDeleteManyArgs} args - Arguments to filter QuizSubmissions to delete.
     * @example
     * // Delete a few QuizSubmissions
     * const { count } = await prisma.quizSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizSubmissionDeleteManyArgs>(args?: SelectSubset<T, QuizSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizSubmissions
     * const quizSubmission = await prisma.quizSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizSubmissionUpdateManyArgs>(args: SelectSubset<T, QuizSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuizSubmission.
     * @param {QuizSubmissionUpsertArgs} args - Arguments to update or create a QuizSubmission.
     * @example
     * // Update or create a QuizSubmission
     * const quizSubmission = await prisma.quizSubmission.upsert({
     *   create: {
     *     // ... data to create a QuizSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizSubmission we want to update
     *   }
     * })
     */
    upsert<T extends QuizSubmissionUpsertArgs>(args: SelectSubset<T, QuizSubmissionUpsertArgs<ExtArgs>>): Prisma__QuizSubmissionClient<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSubmissionCountArgs} args - Arguments to filter QuizSubmissions to count.
     * @example
     * // Count the number of QuizSubmissions
     * const count = await prisma.quizSubmission.count({
     *   where: {
     *     // ... the filter for the QuizSubmissions we want to count
     *   }
     * })
    **/
    count<T extends QuizSubmissionCountArgs>(
      args?: Subset<T, QuizSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuizSubmissionAggregateArgs>(args: Subset<T, QuizSubmissionAggregateArgs>): Prisma.PrismaPromise<GetQuizSubmissionAggregateType<T>>

    /**
     * Group by QuizSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuizSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: QuizSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizSubmission model
   */
  readonly fields: QuizSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends QuizSubmission$answersArgs<ExtArgs> = {}>(args?: Subset<T, QuizSubmission$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuizSubmission model
   */
  interface QuizSubmissionFieldRefs {
    readonly id: FieldRef<"QuizSubmission", 'Int'>
    readonly quizId: FieldRef<"QuizSubmission", 'Int'>
    readonly studentId: FieldRef<"QuizSubmission", 'Int'>
    readonly score: FieldRef<"QuizSubmission", 'Int'>
    readonly timeTaken: FieldRef<"QuizSubmission", 'Int'>
    readonly submittedAt: FieldRef<"QuizSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuizSubmission findUnique
   */
  export type QuizSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSubmission to fetch.
     */
    where: QuizSubmissionWhereUniqueInput
  }

  /**
   * QuizSubmission findUniqueOrThrow
   */
  export type QuizSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSubmission to fetch.
     */
    where: QuizSubmissionWhereUniqueInput
  }

  /**
   * QuizSubmission findFirst
   */
  export type QuizSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSubmission to fetch.
     */
    where?: QuizSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSubmissions to fetch.
     */
    orderBy?: QuizSubmissionOrderByWithRelationInput | QuizSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizSubmissions.
     */
    cursor?: QuizSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizSubmissions.
     */
    distinct?: QuizSubmissionScalarFieldEnum | QuizSubmissionScalarFieldEnum[]
  }

  /**
   * QuizSubmission findFirstOrThrow
   */
  export type QuizSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSubmission to fetch.
     */
    where?: QuizSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSubmissions to fetch.
     */
    orderBy?: QuizSubmissionOrderByWithRelationInput | QuizSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizSubmissions.
     */
    cursor?: QuizSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizSubmissions.
     */
    distinct?: QuizSubmissionScalarFieldEnum | QuizSubmissionScalarFieldEnum[]
  }

  /**
   * QuizSubmission findMany
   */
  export type QuizSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSubmissions to fetch.
     */
    where?: QuizSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSubmissions to fetch.
     */
    orderBy?: QuizSubmissionOrderByWithRelationInput | QuizSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizSubmissions.
     */
    cursor?: QuizSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSubmissions.
     */
    skip?: number
    distinct?: QuizSubmissionScalarFieldEnum | QuizSubmissionScalarFieldEnum[]
  }

  /**
   * QuizSubmission create
   */
  export type QuizSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizSubmission.
     */
    data: XOR<QuizSubmissionCreateInput, QuizSubmissionUncheckedCreateInput>
  }

  /**
   * QuizSubmission createMany
   */
  export type QuizSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizSubmissions.
     */
    data: QuizSubmissionCreateManyInput | QuizSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizSubmission update
   */
  export type QuizSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizSubmission.
     */
    data: XOR<QuizSubmissionUpdateInput, QuizSubmissionUncheckedUpdateInput>
    /**
     * Choose, which QuizSubmission to update.
     */
    where: QuizSubmissionWhereUniqueInput
  }

  /**
   * QuizSubmission updateMany
   */
  export type QuizSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizSubmissions.
     */
    data: XOR<QuizSubmissionUpdateManyMutationInput, QuizSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which QuizSubmissions to update
     */
    where?: QuizSubmissionWhereInput
    /**
     * Limit how many QuizSubmissions to update.
     */
    limit?: number
  }

  /**
   * QuizSubmission upsert
   */
  export type QuizSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizSubmission to update in case it exists.
     */
    where: QuizSubmissionWhereUniqueInput
    /**
     * In case the QuizSubmission found by the `where` argument doesn't exist, create a new QuizSubmission with this data.
     */
    create: XOR<QuizSubmissionCreateInput, QuizSubmissionUncheckedCreateInput>
    /**
     * In case the QuizSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizSubmissionUpdateInput, QuizSubmissionUncheckedUpdateInput>
  }

  /**
   * QuizSubmission delete
   */
  export type QuizSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
    /**
     * Filter which QuizSubmission to delete.
     */
    where: QuizSubmissionWhereUniqueInput
  }

  /**
   * QuizSubmission deleteMany
   */
  export type QuizSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizSubmissions to delete
     */
    where?: QuizSubmissionWhereInput
    /**
     * Limit how many QuizSubmissions to delete.
     */
    limit?: number
  }

  /**
   * QuizSubmission.answers
   */
  export type QuizSubmission$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
    where?: StudentAnswerWhereInput
    orderBy?: StudentAnswerOrderByWithRelationInput | StudentAnswerOrderByWithRelationInput[]
    cursor?: StudentAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentAnswerScalarFieldEnum | StudentAnswerScalarFieldEnum[]
  }

  /**
   * QuizSubmission without action
   */
  export type QuizSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSubmission
     */
    select?: QuizSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSubmission
     */
    omit?: QuizSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSubmissionInclude<ExtArgs> | null
  }


  /**
   * Model StudentAnswer
   */

  export type AggregateStudentAnswer = {
    _count: StudentAnswerCountAggregateOutputType | null
    _avg: StudentAnswerAvgAggregateOutputType | null
    _sum: StudentAnswerSumAggregateOutputType | null
    _min: StudentAnswerMinAggregateOutputType | null
    _max: StudentAnswerMaxAggregateOutputType | null
  }

  export type StudentAnswerAvgAggregateOutputType = {
    id: number | null
    submissionId: number | null
    questionId: number | null
  }

  export type StudentAnswerSumAggregateOutputType = {
    id: number | null
    submissionId: number | null
    questionId: number | null
  }

  export type StudentAnswerMinAggregateOutputType = {
    id: number | null
    submissionId: number | null
    questionId: number | null
    selectedOption: $Enums.QuestionOption | null
  }

  export type StudentAnswerMaxAggregateOutputType = {
    id: number | null
    submissionId: number | null
    questionId: number | null
    selectedOption: $Enums.QuestionOption | null
  }

  export type StudentAnswerCountAggregateOutputType = {
    id: number
    submissionId: number
    questionId: number
    selectedOption: number
    _all: number
  }


  export type StudentAnswerAvgAggregateInputType = {
    id?: true
    submissionId?: true
    questionId?: true
  }

  export type StudentAnswerSumAggregateInputType = {
    id?: true
    submissionId?: true
    questionId?: true
  }

  export type StudentAnswerMinAggregateInputType = {
    id?: true
    submissionId?: true
    questionId?: true
    selectedOption?: true
  }

  export type StudentAnswerMaxAggregateInputType = {
    id?: true
    submissionId?: true
    questionId?: true
    selectedOption?: true
  }

  export type StudentAnswerCountAggregateInputType = {
    id?: true
    submissionId?: true
    questionId?: true
    selectedOption?: true
    _all?: true
  }

  export type StudentAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAnswer to aggregate.
     */
    where?: StudentAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAnswers to fetch.
     */
    orderBy?: StudentAnswerOrderByWithRelationInput | StudentAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentAnswers
    **/
    _count?: true | StudentAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentAnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentAnswerMaxAggregateInputType
  }

  export type GetStudentAnswerAggregateType<T extends StudentAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentAnswer[P]>
      : GetScalarType<T[P], AggregateStudentAnswer[P]>
  }




  export type StudentAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAnswerWhereInput
    orderBy?: StudentAnswerOrderByWithAggregationInput | StudentAnswerOrderByWithAggregationInput[]
    by: StudentAnswerScalarFieldEnum[] | StudentAnswerScalarFieldEnum
    having?: StudentAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentAnswerCountAggregateInputType | true
    _avg?: StudentAnswerAvgAggregateInputType
    _sum?: StudentAnswerSumAggregateInputType
    _min?: StudentAnswerMinAggregateInputType
    _max?: StudentAnswerMaxAggregateInputType
  }

  export type StudentAnswerGroupByOutputType = {
    id: number
    submissionId: number
    questionId: number
    selectedOption: $Enums.QuestionOption
    _count: StudentAnswerCountAggregateOutputType | null
    _avg: StudentAnswerAvgAggregateOutputType | null
    _sum: StudentAnswerSumAggregateOutputType | null
    _min: StudentAnswerMinAggregateOutputType | null
    _max: StudentAnswerMaxAggregateOutputType | null
  }

  type GetStudentAnswerGroupByPayload<T extends StudentAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], StudentAnswerGroupByOutputType[P]>
        }
      >
    >


  export type StudentAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    questionId?: boolean
    selectedOption?: boolean
    submission?: boolean | QuizSubmissionDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentAnswer"]>



  export type StudentAnswerSelectScalar = {
    id?: boolean
    submissionId?: boolean
    questionId?: boolean
    selectedOption?: boolean
  }

  export type StudentAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submissionId" | "questionId" | "selectedOption", ExtArgs["result"]["studentAnswer"]>
  export type StudentAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | QuizSubmissionDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $StudentAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentAnswer"
    objects: {
      submission: Prisma.$QuizSubmissionPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      submissionId: number
      questionId: number
      selectedOption: $Enums.QuestionOption
    }, ExtArgs["result"]["studentAnswer"]>
    composites: {}
  }

  type StudentAnswerGetPayload<S extends boolean | null | undefined | StudentAnswerDefaultArgs> = $Result.GetResult<Prisma.$StudentAnswerPayload, S>

  type StudentAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentAnswerCountAggregateInputType | true
    }

  export interface StudentAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentAnswer'], meta: { name: 'StudentAnswer' } }
    /**
     * Find zero or one StudentAnswer that matches the filter.
     * @param {StudentAnswerFindUniqueArgs} args - Arguments to find a StudentAnswer
     * @example
     * // Get one StudentAnswer
     * const studentAnswer = await prisma.studentAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentAnswerFindUniqueArgs>(args: SelectSubset<T, StudentAnswerFindUniqueArgs<ExtArgs>>): Prisma__StudentAnswerClient<$Result.GetResult<Prisma.$StudentAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentAnswerFindUniqueOrThrowArgs} args - Arguments to find a StudentAnswer
     * @example
     * // Get one StudentAnswer
     * const studentAnswer = await prisma.studentAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentAnswerClient<$Result.GetResult<Prisma.$StudentAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAnswerFindFirstArgs} args - Arguments to find a StudentAnswer
     * @example
     * // Get one StudentAnswer
     * const studentAnswer = await prisma.studentAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentAnswerFindFirstArgs>(args?: SelectSubset<T, StudentAnswerFindFirstArgs<ExtArgs>>): Prisma__StudentAnswerClient<$Result.GetResult<Prisma.$StudentAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAnswerFindFirstOrThrowArgs} args - Arguments to find a StudentAnswer
     * @example
     * // Get one StudentAnswer
     * const studentAnswer = await prisma.studentAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentAnswerClient<$Result.GetResult<Prisma.$StudentAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentAnswers
     * const studentAnswers = await prisma.studentAnswer.findMany()
     * 
     * // Get first 10 StudentAnswers
     * const studentAnswers = await prisma.studentAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentAnswerWithIdOnly = await prisma.studentAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentAnswerFindManyArgs>(args?: SelectSubset<T, StudentAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentAnswer.
     * @param {StudentAnswerCreateArgs} args - Arguments to create a StudentAnswer.
     * @example
     * // Create one StudentAnswer
     * const StudentAnswer = await prisma.studentAnswer.create({
     *   data: {
     *     // ... data to create a StudentAnswer
     *   }
     * })
     * 
     */
    create<T extends StudentAnswerCreateArgs>(args: SelectSubset<T, StudentAnswerCreateArgs<ExtArgs>>): Prisma__StudentAnswerClient<$Result.GetResult<Prisma.$StudentAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentAnswers.
     * @param {StudentAnswerCreateManyArgs} args - Arguments to create many StudentAnswers.
     * @example
     * // Create many StudentAnswers
     * const studentAnswer = await prisma.studentAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentAnswerCreateManyArgs>(args?: SelectSubset<T, StudentAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudentAnswer.
     * @param {StudentAnswerDeleteArgs} args - Arguments to delete one StudentAnswer.
     * @example
     * // Delete one StudentAnswer
     * const StudentAnswer = await prisma.studentAnswer.delete({
     *   where: {
     *     // ... filter to delete one StudentAnswer
     *   }
     * })
     * 
     */
    delete<T extends StudentAnswerDeleteArgs>(args: SelectSubset<T, StudentAnswerDeleteArgs<ExtArgs>>): Prisma__StudentAnswerClient<$Result.GetResult<Prisma.$StudentAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentAnswer.
     * @param {StudentAnswerUpdateArgs} args - Arguments to update one StudentAnswer.
     * @example
     * // Update one StudentAnswer
     * const studentAnswer = await prisma.studentAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentAnswerUpdateArgs>(args: SelectSubset<T, StudentAnswerUpdateArgs<ExtArgs>>): Prisma__StudentAnswerClient<$Result.GetResult<Prisma.$StudentAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentAnswers.
     * @param {StudentAnswerDeleteManyArgs} args - Arguments to filter StudentAnswers to delete.
     * @example
     * // Delete a few StudentAnswers
     * const { count } = await prisma.studentAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentAnswerDeleteManyArgs>(args?: SelectSubset<T, StudentAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentAnswers
     * const studentAnswer = await prisma.studentAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentAnswerUpdateManyArgs>(args: SelectSubset<T, StudentAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentAnswer.
     * @param {StudentAnswerUpsertArgs} args - Arguments to update or create a StudentAnswer.
     * @example
     * // Update or create a StudentAnswer
     * const studentAnswer = await prisma.studentAnswer.upsert({
     *   create: {
     *     // ... data to create a StudentAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentAnswer we want to update
     *   }
     * })
     */
    upsert<T extends StudentAnswerUpsertArgs>(args: SelectSubset<T, StudentAnswerUpsertArgs<ExtArgs>>): Prisma__StudentAnswerClient<$Result.GetResult<Prisma.$StudentAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAnswerCountArgs} args - Arguments to filter StudentAnswers to count.
     * @example
     * // Count the number of StudentAnswers
     * const count = await prisma.studentAnswer.count({
     *   where: {
     *     // ... the filter for the StudentAnswers we want to count
     *   }
     * })
    **/
    count<T extends StudentAnswerCountArgs>(
      args?: Subset<T, StudentAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAnswerAggregateArgs>(args: Subset<T, StudentAnswerAggregateArgs>): Prisma.PrismaPromise<GetStudentAnswerAggregateType<T>>

    /**
     * Group by StudentAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentAnswerGroupByArgs['orderBy'] }
        : { orderBy?: StudentAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentAnswer model
   */
  readonly fields: StudentAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends QuizSubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizSubmissionDefaultArgs<ExtArgs>>): Prisma__QuizSubmissionClient<$Result.GetResult<Prisma.$QuizSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentAnswer model
   */
  interface StudentAnswerFieldRefs {
    readonly id: FieldRef<"StudentAnswer", 'Int'>
    readonly submissionId: FieldRef<"StudentAnswer", 'Int'>
    readonly questionId: FieldRef<"StudentAnswer", 'Int'>
    readonly selectedOption: FieldRef<"StudentAnswer", 'QuestionOption'>
  }
    

  // Custom InputTypes
  /**
   * StudentAnswer findUnique
   */
  export type StudentAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
    /**
     * Filter, which StudentAnswer to fetch.
     */
    where: StudentAnswerWhereUniqueInput
  }

  /**
   * StudentAnswer findUniqueOrThrow
   */
  export type StudentAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
    /**
     * Filter, which StudentAnswer to fetch.
     */
    where: StudentAnswerWhereUniqueInput
  }

  /**
   * StudentAnswer findFirst
   */
  export type StudentAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
    /**
     * Filter, which StudentAnswer to fetch.
     */
    where?: StudentAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAnswers to fetch.
     */
    orderBy?: StudentAnswerOrderByWithRelationInput | StudentAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAnswers.
     */
    cursor?: StudentAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAnswers.
     */
    distinct?: StudentAnswerScalarFieldEnum | StudentAnswerScalarFieldEnum[]
  }

  /**
   * StudentAnswer findFirstOrThrow
   */
  export type StudentAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
    /**
     * Filter, which StudentAnswer to fetch.
     */
    where?: StudentAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAnswers to fetch.
     */
    orderBy?: StudentAnswerOrderByWithRelationInput | StudentAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAnswers.
     */
    cursor?: StudentAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAnswers.
     */
    distinct?: StudentAnswerScalarFieldEnum | StudentAnswerScalarFieldEnum[]
  }

  /**
   * StudentAnswer findMany
   */
  export type StudentAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
    /**
     * Filter, which StudentAnswers to fetch.
     */
    where?: StudentAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAnswers to fetch.
     */
    orderBy?: StudentAnswerOrderByWithRelationInput | StudentAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentAnswers.
     */
    cursor?: StudentAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAnswers.
     */
    skip?: number
    distinct?: StudentAnswerScalarFieldEnum | StudentAnswerScalarFieldEnum[]
  }

  /**
   * StudentAnswer create
   */
  export type StudentAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentAnswer.
     */
    data: XOR<StudentAnswerCreateInput, StudentAnswerUncheckedCreateInput>
  }

  /**
   * StudentAnswer createMany
   */
  export type StudentAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentAnswers.
     */
    data: StudentAnswerCreateManyInput | StudentAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentAnswer update
   */
  export type StudentAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentAnswer.
     */
    data: XOR<StudentAnswerUpdateInput, StudentAnswerUncheckedUpdateInput>
    /**
     * Choose, which StudentAnswer to update.
     */
    where: StudentAnswerWhereUniqueInput
  }

  /**
   * StudentAnswer updateMany
   */
  export type StudentAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentAnswers.
     */
    data: XOR<StudentAnswerUpdateManyMutationInput, StudentAnswerUncheckedUpdateManyInput>
    /**
     * Filter which StudentAnswers to update
     */
    where?: StudentAnswerWhereInput
    /**
     * Limit how many StudentAnswers to update.
     */
    limit?: number
  }

  /**
   * StudentAnswer upsert
   */
  export type StudentAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentAnswer to update in case it exists.
     */
    where: StudentAnswerWhereUniqueInput
    /**
     * In case the StudentAnswer found by the `where` argument doesn't exist, create a new StudentAnswer with this data.
     */
    create: XOR<StudentAnswerCreateInput, StudentAnswerUncheckedCreateInput>
    /**
     * In case the StudentAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentAnswerUpdateInput, StudentAnswerUncheckedUpdateInput>
  }

  /**
   * StudentAnswer delete
   */
  export type StudentAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
    /**
     * Filter which StudentAnswer to delete.
     */
    where: StudentAnswerWhereUniqueInput
  }

  /**
   * StudentAnswer deleteMany
   */
  export type StudentAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAnswers to delete
     */
    where?: StudentAnswerWhereInput
    /**
     * Limit how many StudentAnswers to delete.
     */
    limit?: number
  }

  /**
   * StudentAnswer without action
   */
  export type StudentAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
  }


  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NoteSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NoteMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    userId: number | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    userId: number | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    title: number
    content: number
    userId: number
    isPublic: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NoteAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NoteSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NoteMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    userId?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    userId?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    userId?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _avg?: NoteAvgAggregateInputType
    _sum?: NoteSumAggregateInputType
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    id: number
    title: string
    content: string
    userId: number
    isPublic: boolean
    createdAt: Date
    updatedAt: Date
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    userId?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    accesses?: boolean | Note$accessesArgs<ExtArgs>
    _count?: boolean | NoteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>



  export type NoteSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    userId?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "userId" | "isPublic" | "createdAt" | "updatedAt", ExtArgs["result"]["note"]>
  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    accesses?: boolean | Note$accessesArgs<ExtArgs>
    _count?: boolean | NoteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      accesses: Prisma.$NoteAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      userId: number
      isPublic: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteFindManyArgs>(args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends NoteCreateArgs>(args: SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCreateManyArgs>(args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends NoteDeleteArgs>(args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteUpdateArgs>(args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDeleteManyArgs>(args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteUpdateManyArgs>(args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    accesses<T extends Note$accessesArgs<ExtArgs> = {}>(args?: Subset<T, Note$accessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Note model
   */
  interface NoteFieldRefs {
    readonly id: FieldRef<"Note", 'Int'>
    readonly title: FieldRef<"Note", 'String'>
    readonly content: FieldRef<"Note", 'String'>
    readonly userId: FieldRef<"Note", 'Int'>
    readonly isPublic: FieldRef<"Note", 'Boolean'>
    readonly createdAt: FieldRef<"Note", 'DateTime'>
    readonly updatedAt: FieldRef<"Note", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Note.accesses
   */
  export type Note$accessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteAccess
     */
    select?: NoteAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteAccess
     */
    omit?: NoteAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteAccessInclude<ExtArgs> | null
    where?: NoteAccessWhereInput
    orderBy?: NoteAccessOrderByWithRelationInput | NoteAccessOrderByWithRelationInput[]
    cursor?: NoteAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteAccessScalarFieldEnum | NoteAccessScalarFieldEnum[]
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
  }


  /**
   * Model TeacherRating
   */

  export type AggregateTeacherRating = {
    _count: TeacherRatingCountAggregateOutputType | null
    _avg: TeacherRatingAvgAggregateOutputType | null
    _sum: TeacherRatingSumAggregateOutputType | null
    _min: TeacherRatingMinAggregateOutputType | null
    _max: TeacherRatingMaxAggregateOutputType | null
  }

  export type TeacherRatingAvgAggregateOutputType = {
    id: number | null
    teacherId: number | null
    studentId: number | null
    rating: number | null
  }

  export type TeacherRatingSumAggregateOutputType = {
    id: number | null
    teacherId: number | null
    studentId: number | null
    rating: number | null
  }

  export type TeacherRatingMinAggregateOutputType = {
    id: number | null
    teacherId: number | null
    studentId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type TeacherRatingMaxAggregateOutputType = {
    id: number | null
    teacherId: number | null
    studentId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type TeacherRatingCountAggregateOutputType = {
    id: number
    teacherId: number
    studentId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type TeacherRatingAvgAggregateInputType = {
    id?: true
    teacherId?: true
    studentId?: true
    rating?: true
  }

  export type TeacherRatingSumAggregateInputType = {
    id?: true
    teacherId?: true
    studentId?: true
    rating?: true
  }

  export type TeacherRatingMinAggregateInputType = {
    id?: true
    teacherId?: true
    studentId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type TeacherRatingMaxAggregateInputType = {
    id?: true
    teacherId?: true
    studentId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type TeacherRatingCountAggregateInputType = {
    id?: true
    teacherId?: true
    studentId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type TeacherRatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherRating to aggregate.
     */
    where?: TeacherRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherRatings to fetch.
     */
    orderBy?: TeacherRatingOrderByWithRelationInput | TeacherRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherRatings
    **/
    _count?: true | TeacherRatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherRatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherRatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherRatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherRatingMaxAggregateInputType
  }

  export type GetTeacherRatingAggregateType<T extends TeacherRatingAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherRating[P]>
      : GetScalarType<T[P], AggregateTeacherRating[P]>
  }




  export type TeacherRatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherRatingWhereInput
    orderBy?: TeacherRatingOrderByWithAggregationInput | TeacherRatingOrderByWithAggregationInput[]
    by: TeacherRatingScalarFieldEnum[] | TeacherRatingScalarFieldEnum
    having?: TeacherRatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherRatingCountAggregateInputType | true
    _avg?: TeacherRatingAvgAggregateInputType
    _sum?: TeacherRatingSumAggregateInputType
    _min?: TeacherRatingMinAggregateInputType
    _max?: TeacherRatingMaxAggregateInputType
  }

  export type TeacherRatingGroupByOutputType = {
    id: number
    teacherId: number
    studentId: number
    rating: number
    comment: string | null
    createdAt: Date
    _count: TeacherRatingCountAggregateOutputType | null
    _avg: TeacherRatingAvgAggregateOutputType | null
    _sum: TeacherRatingSumAggregateOutputType | null
    _min: TeacherRatingMinAggregateOutputType | null
    _max: TeacherRatingMaxAggregateOutputType | null
  }

  type GetTeacherRatingGroupByPayload<T extends TeacherRatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherRatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherRatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherRatingGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherRatingGroupByOutputType[P]>
        }
      >
    >


  export type TeacherRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    studentId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherRating"]>



  export type TeacherRatingSelectScalar = {
    id?: boolean
    teacherId?: boolean
    studentId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type TeacherRatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacherId" | "studentId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["teacherRating"]>
  export type TeacherRatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TeacherRatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherRating"
    objects: {
      teacher: Prisma.$UserPayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teacherId: number
      studentId: number
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["teacherRating"]>
    composites: {}
  }

  type TeacherRatingGetPayload<S extends boolean | null | undefined | TeacherRatingDefaultArgs> = $Result.GetResult<Prisma.$TeacherRatingPayload, S>

  type TeacherRatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherRatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherRatingCountAggregateInputType | true
    }

  export interface TeacherRatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherRating'], meta: { name: 'TeacherRating' } }
    /**
     * Find zero or one TeacherRating that matches the filter.
     * @param {TeacherRatingFindUniqueArgs} args - Arguments to find a TeacherRating
     * @example
     * // Get one TeacherRating
     * const teacherRating = await prisma.teacherRating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherRatingFindUniqueArgs>(args: SelectSubset<T, TeacherRatingFindUniqueArgs<ExtArgs>>): Prisma__TeacherRatingClient<$Result.GetResult<Prisma.$TeacherRatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeacherRating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherRatingFindUniqueOrThrowArgs} args - Arguments to find a TeacherRating
     * @example
     * // Get one TeacherRating
     * const teacherRating = await prisma.teacherRating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherRatingFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherRatingClient<$Result.GetResult<Prisma.$TeacherRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherRating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherRatingFindFirstArgs} args - Arguments to find a TeacherRating
     * @example
     * // Get one TeacherRating
     * const teacherRating = await prisma.teacherRating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherRatingFindFirstArgs>(args?: SelectSubset<T, TeacherRatingFindFirstArgs<ExtArgs>>): Prisma__TeacherRatingClient<$Result.GetResult<Prisma.$TeacherRatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherRating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherRatingFindFirstOrThrowArgs} args - Arguments to find a TeacherRating
     * @example
     * // Get one TeacherRating
     * const teacherRating = await prisma.teacherRating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherRatingFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherRatingClient<$Result.GetResult<Prisma.$TeacherRatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeacherRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherRatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherRatings
     * const teacherRatings = await prisma.teacherRating.findMany()
     * 
     * // Get first 10 TeacherRatings
     * const teacherRatings = await prisma.teacherRating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherRatingWithIdOnly = await prisma.teacherRating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherRatingFindManyArgs>(args?: SelectSubset<T, TeacherRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeacherRating.
     * @param {TeacherRatingCreateArgs} args - Arguments to create a TeacherRating.
     * @example
     * // Create one TeacherRating
     * const TeacherRating = await prisma.teacherRating.create({
     *   data: {
     *     // ... data to create a TeacherRating
     *   }
     * })
     * 
     */
    create<T extends TeacherRatingCreateArgs>(args: SelectSubset<T, TeacherRatingCreateArgs<ExtArgs>>): Prisma__TeacherRatingClient<$Result.GetResult<Prisma.$TeacherRatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeacherRatings.
     * @param {TeacherRatingCreateManyArgs} args - Arguments to create many TeacherRatings.
     * @example
     * // Create many TeacherRatings
     * const teacherRating = await prisma.teacherRating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherRatingCreateManyArgs>(args?: SelectSubset<T, TeacherRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TeacherRating.
     * @param {TeacherRatingDeleteArgs} args - Arguments to delete one TeacherRating.
     * @example
     * // Delete one TeacherRating
     * const TeacherRating = await prisma.teacherRating.delete({
     *   where: {
     *     // ... filter to delete one TeacherRating
     *   }
     * })
     * 
     */
    delete<T extends TeacherRatingDeleteArgs>(args: SelectSubset<T, TeacherRatingDeleteArgs<ExtArgs>>): Prisma__TeacherRatingClient<$Result.GetResult<Prisma.$TeacherRatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeacherRating.
     * @param {TeacherRatingUpdateArgs} args - Arguments to update one TeacherRating.
     * @example
     * // Update one TeacherRating
     * const teacherRating = await prisma.teacherRating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherRatingUpdateArgs>(args: SelectSubset<T, TeacherRatingUpdateArgs<ExtArgs>>): Prisma__TeacherRatingClient<$Result.GetResult<Prisma.$TeacherRatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeacherRatings.
     * @param {TeacherRatingDeleteManyArgs} args - Arguments to filter TeacherRatings to delete.
     * @example
     * // Delete a few TeacherRatings
     * const { count } = await prisma.teacherRating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherRatingDeleteManyArgs>(args?: SelectSubset<T, TeacherRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherRatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherRatings
     * const teacherRating = await prisma.teacherRating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherRatingUpdateManyArgs>(args: SelectSubset<T, TeacherRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeacherRating.
     * @param {TeacherRatingUpsertArgs} args - Arguments to update or create a TeacherRating.
     * @example
     * // Update or create a TeacherRating
     * const teacherRating = await prisma.teacherRating.upsert({
     *   create: {
     *     // ... data to create a TeacherRating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherRating we want to update
     *   }
     * })
     */
    upsert<T extends TeacherRatingUpsertArgs>(args: SelectSubset<T, TeacherRatingUpsertArgs<ExtArgs>>): Prisma__TeacherRatingClient<$Result.GetResult<Prisma.$TeacherRatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeacherRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherRatingCountArgs} args - Arguments to filter TeacherRatings to count.
     * @example
     * // Count the number of TeacherRatings
     * const count = await prisma.teacherRating.count({
     *   where: {
     *     // ... the filter for the TeacherRatings we want to count
     *   }
     * })
    **/
    count<T extends TeacherRatingCountArgs>(
      args?: Subset<T, TeacherRatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherRatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherRatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherRatingAggregateArgs>(args: Subset<T, TeacherRatingAggregateArgs>): Prisma.PrismaPromise<GetTeacherRatingAggregateType<T>>

    /**
     * Group by TeacherRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherRatingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherRatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherRatingGroupByArgs['orderBy'] }
        : { orderBy?: TeacherRatingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherRating model
   */
  readonly fields: TeacherRatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherRatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeacherRating model
   */
  interface TeacherRatingFieldRefs {
    readonly id: FieldRef<"TeacherRating", 'Int'>
    readonly teacherId: FieldRef<"TeacherRating", 'Int'>
    readonly studentId: FieldRef<"TeacherRating", 'Int'>
    readonly rating: FieldRef<"TeacherRating", 'Int'>
    readonly comment: FieldRef<"TeacherRating", 'String'>
    readonly createdAt: FieldRef<"TeacherRating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeacherRating findUnique
   */
  export type TeacherRatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRating
     */
    select?: TeacherRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRating
     */
    omit?: TeacherRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRatingInclude<ExtArgs> | null
    /**
     * Filter, which TeacherRating to fetch.
     */
    where: TeacherRatingWhereUniqueInput
  }

  /**
   * TeacherRating findUniqueOrThrow
   */
  export type TeacherRatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRating
     */
    select?: TeacherRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRating
     */
    omit?: TeacherRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRatingInclude<ExtArgs> | null
    /**
     * Filter, which TeacherRating to fetch.
     */
    where: TeacherRatingWhereUniqueInput
  }

  /**
   * TeacherRating findFirst
   */
  export type TeacherRatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRating
     */
    select?: TeacherRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRating
     */
    omit?: TeacherRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRatingInclude<ExtArgs> | null
    /**
     * Filter, which TeacherRating to fetch.
     */
    where?: TeacherRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherRatings to fetch.
     */
    orderBy?: TeacherRatingOrderByWithRelationInput | TeacherRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherRatings.
     */
    cursor?: TeacherRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherRatings.
     */
    distinct?: TeacherRatingScalarFieldEnum | TeacherRatingScalarFieldEnum[]
  }

  /**
   * TeacherRating findFirstOrThrow
   */
  export type TeacherRatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRating
     */
    select?: TeacherRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRating
     */
    omit?: TeacherRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRatingInclude<ExtArgs> | null
    /**
     * Filter, which TeacherRating to fetch.
     */
    where?: TeacherRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherRatings to fetch.
     */
    orderBy?: TeacherRatingOrderByWithRelationInput | TeacherRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherRatings.
     */
    cursor?: TeacherRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherRatings.
     */
    distinct?: TeacherRatingScalarFieldEnum | TeacherRatingScalarFieldEnum[]
  }

  /**
   * TeacherRating findMany
   */
  export type TeacherRatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRating
     */
    select?: TeacherRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRating
     */
    omit?: TeacherRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRatingInclude<ExtArgs> | null
    /**
     * Filter, which TeacherRatings to fetch.
     */
    where?: TeacherRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherRatings to fetch.
     */
    orderBy?: TeacherRatingOrderByWithRelationInput | TeacherRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherRatings.
     */
    cursor?: TeacherRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherRatings.
     */
    skip?: number
    distinct?: TeacherRatingScalarFieldEnum | TeacherRatingScalarFieldEnum[]
  }

  /**
   * TeacherRating create
   */
  export type TeacherRatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRating
     */
    select?: TeacherRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRating
     */
    omit?: TeacherRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRatingInclude<ExtArgs> | null
    /**
     * The data needed to create a TeacherRating.
     */
    data: XOR<TeacherRatingCreateInput, TeacherRatingUncheckedCreateInput>
  }

  /**
   * TeacherRating createMany
   */
  export type TeacherRatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherRatings.
     */
    data: TeacherRatingCreateManyInput | TeacherRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeacherRating update
   */
  export type TeacherRatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRating
     */
    select?: TeacherRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRating
     */
    omit?: TeacherRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRatingInclude<ExtArgs> | null
    /**
     * The data needed to update a TeacherRating.
     */
    data: XOR<TeacherRatingUpdateInput, TeacherRatingUncheckedUpdateInput>
    /**
     * Choose, which TeacherRating to update.
     */
    where: TeacherRatingWhereUniqueInput
  }

  /**
   * TeacherRating updateMany
   */
  export type TeacherRatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherRatings.
     */
    data: XOR<TeacherRatingUpdateManyMutationInput, TeacherRatingUncheckedUpdateManyInput>
    /**
     * Filter which TeacherRatings to update
     */
    where?: TeacherRatingWhereInput
    /**
     * Limit how many TeacherRatings to update.
     */
    limit?: number
  }

  /**
   * TeacherRating upsert
   */
  export type TeacherRatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRating
     */
    select?: TeacherRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRating
     */
    omit?: TeacherRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRatingInclude<ExtArgs> | null
    /**
     * The filter to search for the TeacherRating to update in case it exists.
     */
    where: TeacherRatingWhereUniqueInput
    /**
     * In case the TeacherRating found by the `where` argument doesn't exist, create a new TeacherRating with this data.
     */
    create: XOR<TeacherRatingCreateInput, TeacherRatingUncheckedCreateInput>
    /**
     * In case the TeacherRating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherRatingUpdateInput, TeacherRatingUncheckedUpdateInput>
  }

  /**
   * TeacherRating delete
   */
  export type TeacherRatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRating
     */
    select?: TeacherRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRating
     */
    omit?: TeacherRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRatingInclude<ExtArgs> | null
    /**
     * Filter which TeacherRating to delete.
     */
    where: TeacherRatingWhereUniqueInput
  }

  /**
   * TeacherRating deleteMany
   */
  export type TeacherRatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherRatings to delete
     */
    where?: TeacherRatingWhereInput
    /**
     * Limit how many TeacherRatings to delete.
     */
    limit?: number
  }

  /**
   * TeacherRating without action
   */
  export type TeacherRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRating
     */
    select?: TeacherRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRating
     */
    omit?: TeacherRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRatingInclude<ExtArgs> | null
  }


  /**
   * Model NoteAccess
   */

  export type AggregateNoteAccess = {
    _count: NoteAccessCountAggregateOutputType | null
    _avg: NoteAccessAvgAggregateOutputType | null
    _sum: NoteAccessSumAggregateOutputType | null
    _min: NoteAccessMinAggregateOutputType | null
    _max: NoteAccessMaxAggregateOutputType | null
  }

  export type NoteAccessAvgAggregateOutputType = {
    id: number | null
    noteId: number | null
    studentId: number | null
  }

  export type NoteAccessSumAggregateOutputType = {
    id: number | null
    noteId: number | null
    studentId: number | null
  }

  export type NoteAccessMinAggregateOutputType = {
    id: number | null
    noteId: number | null
    studentId: number | null
    grantedAt: Date | null
  }

  export type NoteAccessMaxAggregateOutputType = {
    id: number | null
    noteId: number | null
    studentId: number | null
    grantedAt: Date | null
  }

  export type NoteAccessCountAggregateOutputType = {
    id: number
    noteId: number
    studentId: number
    grantedAt: number
    _all: number
  }


  export type NoteAccessAvgAggregateInputType = {
    id?: true
    noteId?: true
    studentId?: true
  }

  export type NoteAccessSumAggregateInputType = {
    id?: true
    noteId?: true
    studentId?: true
  }

  export type NoteAccessMinAggregateInputType = {
    id?: true
    noteId?: true
    studentId?: true
    grantedAt?: true
  }

  export type NoteAccessMaxAggregateInputType = {
    id?: true
    noteId?: true
    studentId?: true
    grantedAt?: true
  }

  export type NoteAccessCountAggregateInputType = {
    id?: true
    noteId?: true
    studentId?: true
    grantedAt?: true
    _all?: true
  }

  export type NoteAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteAccess to aggregate.
     */
    where?: NoteAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteAccesses to fetch.
     */
    orderBy?: NoteAccessOrderByWithRelationInput | NoteAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NoteAccesses
    **/
    _count?: true | NoteAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoteAccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoteAccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteAccessMaxAggregateInputType
  }

  export type GetNoteAccessAggregateType<T extends NoteAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateNoteAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoteAccess[P]>
      : GetScalarType<T[P], AggregateNoteAccess[P]>
  }




  export type NoteAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteAccessWhereInput
    orderBy?: NoteAccessOrderByWithAggregationInput | NoteAccessOrderByWithAggregationInput[]
    by: NoteAccessScalarFieldEnum[] | NoteAccessScalarFieldEnum
    having?: NoteAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteAccessCountAggregateInputType | true
    _avg?: NoteAccessAvgAggregateInputType
    _sum?: NoteAccessSumAggregateInputType
    _min?: NoteAccessMinAggregateInputType
    _max?: NoteAccessMaxAggregateInputType
  }

  export type NoteAccessGroupByOutputType = {
    id: number
    noteId: number
    studentId: number
    grantedAt: Date
    _count: NoteAccessCountAggregateOutputType | null
    _avg: NoteAccessAvgAggregateOutputType | null
    _sum: NoteAccessSumAggregateOutputType | null
    _min: NoteAccessMinAggregateOutputType | null
    _max: NoteAccessMaxAggregateOutputType | null
  }

  type GetNoteAccessGroupByPayload<T extends NoteAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteAccessGroupByOutputType[P]>
            : GetScalarType<T[P], NoteAccessGroupByOutputType[P]>
        }
      >
    >


  export type NoteAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noteId?: boolean
    studentId?: boolean
    grantedAt?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteAccess"]>



  export type NoteAccessSelectScalar = {
    id?: boolean
    noteId?: boolean
    studentId?: boolean
    grantedAt?: boolean
  }

  export type NoteAccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "noteId" | "studentId" | "grantedAt", ExtArgs["result"]["noteAccess"]>
  export type NoteAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NoteAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NoteAccess"
    objects: {
      note: Prisma.$NotePayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      noteId: number
      studentId: number
      grantedAt: Date
    }, ExtArgs["result"]["noteAccess"]>
    composites: {}
  }

  type NoteAccessGetPayload<S extends boolean | null | undefined | NoteAccessDefaultArgs> = $Result.GetResult<Prisma.$NoteAccessPayload, S>

  type NoteAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteAccessCountAggregateInputType | true
    }

  export interface NoteAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NoteAccess'], meta: { name: 'NoteAccess' } }
    /**
     * Find zero or one NoteAccess that matches the filter.
     * @param {NoteAccessFindUniqueArgs} args - Arguments to find a NoteAccess
     * @example
     * // Get one NoteAccess
     * const noteAccess = await prisma.noteAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteAccessFindUniqueArgs>(args: SelectSubset<T, NoteAccessFindUniqueArgs<ExtArgs>>): Prisma__NoteAccessClient<$Result.GetResult<Prisma.$NoteAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NoteAccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteAccessFindUniqueOrThrowArgs} args - Arguments to find a NoteAccess
     * @example
     * // Get one NoteAccess
     * const noteAccess = await prisma.noteAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteAccessClient<$Result.GetResult<Prisma.$NoteAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoteAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAccessFindFirstArgs} args - Arguments to find a NoteAccess
     * @example
     * // Get one NoteAccess
     * const noteAccess = await prisma.noteAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteAccessFindFirstArgs>(args?: SelectSubset<T, NoteAccessFindFirstArgs<ExtArgs>>): Prisma__NoteAccessClient<$Result.GetResult<Prisma.$NoteAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoteAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAccessFindFirstOrThrowArgs} args - Arguments to find a NoteAccess
     * @example
     * // Get one NoteAccess
     * const noteAccess = await prisma.noteAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteAccessClient<$Result.GetResult<Prisma.$NoteAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NoteAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NoteAccesses
     * const noteAccesses = await prisma.noteAccess.findMany()
     * 
     * // Get first 10 NoteAccesses
     * const noteAccesses = await prisma.noteAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteAccessWithIdOnly = await prisma.noteAccess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteAccessFindManyArgs>(args?: SelectSubset<T, NoteAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NoteAccess.
     * @param {NoteAccessCreateArgs} args - Arguments to create a NoteAccess.
     * @example
     * // Create one NoteAccess
     * const NoteAccess = await prisma.noteAccess.create({
     *   data: {
     *     // ... data to create a NoteAccess
     *   }
     * })
     * 
     */
    create<T extends NoteAccessCreateArgs>(args: SelectSubset<T, NoteAccessCreateArgs<ExtArgs>>): Prisma__NoteAccessClient<$Result.GetResult<Prisma.$NoteAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NoteAccesses.
     * @param {NoteAccessCreateManyArgs} args - Arguments to create many NoteAccesses.
     * @example
     * // Create many NoteAccesses
     * const noteAccess = await prisma.noteAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteAccessCreateManyArgs>(args?: SelectSubset<T, NoteAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NoteAccess.
     * @param {NoteAccessDeleteArgs} args - Arguments to delete one NoteAccess.
     * @example
     * // Delete one NoteAccess
     * const NoteAccess = await prisma.noteAccess.delete({
     *   where: {
     *     // ... filter to delete one NoteAccess
     *   }
     * })
     * 
     */
    delete<T extends NoteAccessDeleteArgs>(args: SelectSubset<T, NoteAccessDeleteArgs<ExtArgs>>): Prisma__NoteAccessClient<$Result.GetResult<Prisma.$NoteAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NoteAccess.
     * @param {NoteAccessUpdateArgs} args - Arguments to update one NoteAccess.
     * @example
     * // Update one NoteAccess
     * const noteAccess = await prisma.noteAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteAccessUpdateArgs>(args: SelectSubset<T, NoteAccessUpdateArgs<ExtArgs>>): Prisma__NoteAccessClient<$Result.GetResult<Prisma.$NoteAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NoteAccesses.
     * @param {NoteAccessDeleteManyArgs} args - Arguments to filter NoteAccesses to delete.
     * @example
     * // Delete a few NoteAccesses
     * const { count } = await prisma.noteAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteAccessDeleteManyArgs>(args?: SelectSubset<T, NoteAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoteAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NoteAccesses
     * const noteAccess = await prisma.noteAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteAccessUpdateManyArgs>(args: SelectSubset<T, NoteAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NoteAccess.
     * @param {NoteAccessUpsertArgs} args - Arguments to update or create a NoteAccess.
     * @example
     * // Update or create a NoteAccess
     * const noteAccess = await prisma.noteAccess.upsert({
     *   create: {
     *     // ... data to create a NoteAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NoteAccess we want to update
     *   }
     * })
     */
    upsert<T extends NoteAccessUpsertArgs>(args: SelectSubset<T, NoteAccessUpsertArgs<ExtArgs>>): Prisma__NoteAccessClient<$Result.GetResult<Prisma.$NoteAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NoteAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAccessCountArgs} args - Arguments to filter NoteAccesses to count.
     * @example
     * // Count the number of NoteAccesses
     * const count = await prisma.noteAccess.count({
     *   where: {
     *     // ... the filter for the NoteAccesses we want to count
     *   }
     * })
    **/
    count<T extends NoteAccessCountArgs>(
      args?: Subset<T, NoteAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NoteAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoteAccessAggregateArgs>(args: Subset<T, NoteAccessAggregateArgs>): Prisma.PrismaPromise<GetNoteAccessAggregateType<T>>

    /**
     * Group by NoteAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAccessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoteAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteAccessGroupByArgs['orderBy'] }
        : { orderBy?: NoteAccessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoteAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NoteAccess model
   */
  readonly fields: NoteAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NoteAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    note<T extends NoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NoteDefaultArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NoteAccess model
   */
  interface NoteAccessFieldRefs {
    readonly id: FieldRef<"NoteAccess", 'Int'>
    readonly noteId: FieldRef<"NoteAccess", 'Int'>
    readonly studentId: FieldRef<"NoteAccess", 'Int'>
    readonly grantedAt: FieldRef<"NoteAccess", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NoteAccess findUnique
   */
  export type NoteAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteAccess
     */
    select?: NoteAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteAccess
     */
    omit?: NoteAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteAccessInclude<ExtArgs> | null
    /**
     * Filter, which NoteAccess to fetch.
     */
    where: NoteAccessWhereUniqueInput
  }

  /**
   * NoteAccess findUniqueOrThrow
   */
  export type NoteAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteAccess
     */
    select?: NoteAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteAccess
     */
    omit?: NoteAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteAccessInclude<ExtArgs> | null
    /**
     * Filter, which NoteAccess to fetch.
     */
    where: NoteAccessWhereUniqueInput
  }

  /**
   * NoteAccess findFirst
   */
  export type NoteAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteAccess
     */
    select?: NoteAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteAccess
     */
    omit?: NoteAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteAccessInclude<ExtArgs> | null
    /**
     * Filter, which NoteAccess to fetch.
     */
    where?: NoteAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteAccesses to fetch.
     */
    orderBy?: NoteAccessOrderByWithRelationInput | NoteAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteAccesses.
     */
    cursor?: NoteAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteAccesses.
     */
    distinct?: NoteAccessScalarFieldEnum | NoteAccessScalarFieldEnum[]
  }

  /**
   * NoteAccess findFirstOrThrow
   */
  export type NoteAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteAccess
     */
    select?: NoteAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteAccess
     */
    omit?: NoteAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteAccessInclude<ExtArgs> | null
    /**
     * Filter, which NoteAccess to fetch.
     */
    where?: NoteAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteAccesses to fetch.
     */
    orderBy?: NoteAccessOrderByWithRelationInput | NoteAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteAccesses.
     */
    cursor?: NoteAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteAccesses.
     */
    distinct?: NoteAccessScalarFieldEnum | NoteAccessScalarFieldEnum[]
  }

  /**
   * NoteAccess findMany
   */
  export type NoteAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteAccess
     */
    select?: NoteAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteAccess
     */
    omit?: NoteAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteAccessInclude<ExtArgs> | null
    /**
     * Filter, which NoteAccesses to fetch.
     */
    where?: NoteAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteAccesses to fetch.
     */
    orderBy?: NoteAccessOrderByWithRelationInput | NoteAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NoteAccesses.
     */
    cursor?: NoteAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteAccesses.
     */
    skip?: number
    distinct?: NoteAccessScalarFieldEnum | NoteAccessScalarFieldEnum[]
  }

  /**
   * NoteAccess create
   */
  export type NoteAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteAccess
     */
    select?: NoteAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteAccess
     */
    omit?: NoteAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a NoteAccess.
     */
    data: XOR<NoteAccessCreateInput, NoteAccessUncheckedCreateInput>
  }

  /**
   * NoteAccess createMany
   */
  export type NoteAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NoteAccesses.
     */
    data: NoteAccessCreateManyInput | NoteAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NoteAccess update
   */
  export type NoteAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteAccess
     */
    select?: NoteAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteAccess
     */
    omit?: NoteAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a NoteAccess.
     */
    data: XOR<NoteAccessUpdateInput, NoteAccessUncheckedUpdateInput>
    /**
     * Choose, which NoteAccess to update.
     */
    where: NoteAccessWhereUniqueInput
  }

  /**
   * NoteAccess updateMany
   */
  export type NoteAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NoteAccesses.
     */
    data: XOR<NoteAccessUpdateManyMutationInput, NoteAccessUncheckedUpdateManyInput>
    /**
     * Filter which NoteAccesses to update
     */
    where?: NoteAccessWhereInput
    /**
     * Limit how many NoteAccesses to update.
     */
    limit?: number
  }

  /**
   * NoteAccess upsert
   */
  export type NoteAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteAccess
     */
    select?: NoteAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteAccess
     */
    omit?: NoteAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the NoteAccess to update in case it exists.
     */
    where: NoteAccessWhereUniqueInput
    /**
     * In case the NoteAccess found by the `where` argument doesn't exist, create a new NoteAccess with this data.
     */
    create: XOR<NoteAccessCreateInput, NoteAccessUncheckedCreateInput>
    /**
     * In case the NoteAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteAccessUpdateInput, NoteAccessUncheckedUpdateInput>
  }

  /**
   * NoteAccess delete
   */
  export type NoteAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteAccess
     */
    select?: NoteAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteAccess
     */
    omit?: NoteAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteAccessInclude<ExtArgs> | null
    /**
     * Filter which NoteAccess to delete.
     */
    where: NoteAccessWhereUniqueInput
  }

  /**
   * NoteAccess deleteMany
   */
  export type NoteAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteAccesses to delete
     */
    where?: NoteAccessWhereInput
    /**
     * Limit how many NoteAccesses to delete.
     */
    limit?: number
  }

  /**
   * NoteAccess without action
   */
  export type NoteAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteAccess
     */
    select?: NoteAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteAccess
     */
    omit?: NoteAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteAccessInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role',
    firstName: 'firstName',
    lastName: 'lastName',
    profilePicture: 'profilePicture',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    teacherId: 'teacherId',
    timeLimit: 'timeLimit',
    passingScore: 'passingScore',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    quizId: 'quizId',
    text: 'text',
    optionA: 'optionA',
    optionB: 'optionB',
    optionC: 'optionC',
    optionD: 'optionD',
    correctOption: 'correctOption',
    createdAt: 'createdAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const QuizSubmissionScalarFieldEnum: {
    id: 'id',
    quizId: 'quizId',
    studentId: 'studentId',
    score: 'score',
    timeTaken: 'timeTaken',
    submittedAt: 'submittedAt'
  };

  export type QuizSubmissionScalarFieldEnum = (typeof QuizSubmissionScalarFieldEnum)[keyof typeof QuizSubmissionScalarFieldEnum]


  export const StudentAnswerScalarFieldEnum: {
    id: 'id',
    submissionId: 'submissionId',
    questionId: 'questionId',
    selectedOption: 'selectedOption'
  };

  export type StudentAnswerScalarFieldEnum = (typeof StudentAnswerScalarFieldEnum)[keyof typeof StudentAnswerScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    userId: 'userId',
    isPublic: 'isPublic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const TeacherRatingScalarFieldEnum: {
    id: 'id',
    teacherId: 'teacherId',
    studentId: 'studentId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type TeacherRatingScalarFieldEnum = (typeof TeacherRatingScalarFieldEnum)[keyof typeof TeacherRatingScalarFieldEnum]


  export const NoteAccessScalarFieldEnum: {
    id: 'id',
    noteId: 'noteId',
    studentId: 'studentId',
    grantedAt: 'grantedAt'
  };

  export type NoteAccessScalarFieldEnum = (typeof NoteAccessScalarFieldEnum)[keyof typeof NoteAccessScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    username: 'username',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    profilePicture: 'profilePicture'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const QuizOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description'
  };

  export type QuizOrderByRelevanceFieldEnum = (typeof QuizOrderByRelevanceFieldEnum)[keyof typeof QuizOrderByRelevanceFieldEnum]


  export const QuestionOrderByRelevanceFieldEnum: {
    text: 'text',
    optionA: 'optionA',
    optionB: 'optionB',
    optionC: 'optionC',
    optionD: 'optionD'
  };

  export type QuestionOrderByRelevanceFieldEnum = (typeof QuestionOrderByRelevanceFieldEnum)[keyof typeof QuestionOrderByRelevanceFieldEnum]


  export const NoteOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content'
  };

  export type NoteOrderByRelevanceFieldEnum = (typeof NoteOrderByRelevanceFieldEnum)[keyof typeof NoteOrderByRelevanceFieldEnum]


  export const TeacherRatingOrderByRelevanceFieldEnum: {
    comment: 'comment'
  };

  export type TeacherRatingOrderByRelevanceFieldEnum = (typeof TeacherRatingOrderByRelevanceFieldEnum)[keyof typeof TeacherRatingOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'QuestionOption'
   */
  export type EnumQuestionOptionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionOption'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    quizzes?: QuizListRelationFilter
    quizSubmissions?: QuizSubmissionListRelationFilter
    teacherRatings?: TeacherRatingListRelationFilter
    studentRatings?: TeacherRatingListRelationFilter
    notes?: NoteListRelationFilter
    noteAccesses?: NoteAccessListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quizzes?: QuizOrderByRelationAggregateInput
    quizSubmissions?: QuizSubmissionOrderByRelationAggregateInput
    teacherRatings?: TeacherRatingOrderByRelationAggregateInput
    studentRatings?: TeacherRatingOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
    noteAccesses?: NoteAccessOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    quizzes?: QuizListRelationFilter
    quizSubmissions?: QuizSubmissionListRelationFilter
    teacherRatings?: TeacherRatingListRelationFilter
    studentRatings?: TeacherRatingListRelationFilter
    notes?: NoteListRelationFilter
    noteAccesses?: NoteAccessListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: IntFilter<"Quiz"> | number
    title?: StringFilter<"Quiz"> | string
    description?: StringNullableFilter<"Quiz"> | string | null
    teacherId?: IntFilter<"Quiz"> | number
    timeLimit?: IntFilter<"Quiz"> | number
    passingScore?: IntFilter<"Quiz"> | number
    isPublished?: BoolFilter<"Quiz"> | boolean
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeFilter<"Quiz"> | Date | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    questions?: QuestionListRelationFilter
    submissions?: QuizSubmissionListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    teacherId?: SortOrder
    timeLimit?: SortOrder
    passingScore?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacher?: UserOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
    submissions?: QuizSubmissionOrderByRelationAggregateInput
    _relevance?: QuizOrderByRelevanceInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    title?: StringFilter<"Quiz"> | string
    description?: StringNullableFilter<"Quiz"> | string | null
    teacherId?: IntFilter<"Quiz"> | number
    timeLimit?: IntFilter<"Quiz"> | number
    passingScore?: IntFilter<"Quiz"> | number
    isPublished?: BoolFilter<"Quiz"> | boolean
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeFilter<"Quiz"> | Date | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    questions?: QuestionListRelationFilter
    submissions?: QuizSubmissionListRelationFilter
  }, "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    teacherId?: SortOrder
    timeLimit?: SortOrder
    passingScore?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _avg?: QuizAvgOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
    _sum?: QuizSumOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Quiz"> | number
    title?: StringWithAggregatesFilter<"Quiz"> | string
    description?: StringNullableWithAggregatesFilter<"Quiz"> | string | null
    teacherId?: IntWithAggregatesFilter<"Quiz"> | number
    timeLimit?: IntWithAggregatesFilter<"Quiz"> | number
    passingScore?: IntWithAggregatesFilter<"Quiz"> | number
    isPublished?: BoolWithAggregatesFilter<"Quiz"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: IntFilter<"Question"> | number
    quizId?: IntFilter<"Question"> | number
    text?: StringFilter<"Question"> | string
    optionA?: StringFilter<"Question"> | string
    optionB?: StringFilter<"Question"> | string
    optionC?: StringFilter<"Question"> | string
    optionD?: StringFilter<"Question"> | string
    correctOption?: EnumQuestionOptionFilter<"Question"> | $Enums.QuestionOption
    createdAt?: DateTimeFilter<"Question"> | Date | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    answers?: StudentAnswerListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    quizId?: SortOrder
    text?: SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    correctOption?: SortOrder
    createdAt?: SortOrder
    quiz?: QuizOrderByWithRelationInput
    answers?: StudentAnswerOrderByRelationAggregateInput
    _relevance?: QuestionOrderByRelevanceInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    quizId?: IntFilter<"Question"> | number
    text?: StringFilter<"Question"> | string
    optionA?: StringFilter<"Question"> | string
    optionB?: StringFilter<"Question"> | string
    optionC?: StringFilter<"Question"> | string
    optionD?: StringFilter<"Question"> | string
    correctOption?: EnumQuestionOptionFilter<"Question"> | $Enums.QuestionOption
    createdAt?: DateTimeFilter<"Question"> | Date | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    answers?: StudentAnswerListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    quizId?: SortOrder
    text?: SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    correctOption?: SortOrder
    createdAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Question"> | number
    quizId?: IntWithAggregatesFilter<"Question"> | number
    text?: StringWithAggregatesFilter<"Question"> | string
    optionA?: StringWithAggregatesFilter<"Question"> | string
    optionB?: StringWithAggregatesFilter<"Question"> | string
    optionC?: StringWithAggregatesFilter<"Question"> | string
    optionD?: StringWithAggregatesFilter<"Question"> | string
    correctOption?: EnumQuestionOptionWithAggregatesFilter<"Question"> | $Enums.QuestionOption
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type QuizSubmissionWhereInput = {
    AND?: QuizSubmissionWhereInput | QuizSubmissionWhereInput[]
    OR?: QuizSubmissionWhereInput[]
    NOT?: QuizSubmissionWhereInput | QuizSubmissionWhereInput[]
    id?: IntFilter<"QuizSubmission"> | number
    quizId?: IntFilter<"QuizSubmission"> | number
    studentId?: IntFilter<"QuizSubmission"> | number
    score?: IntFilter<"QuizSubmission"> | number
    timeTaken?: IntFilter<"QuizSubmission"> | number
    submittedAt?: DateTimeFilter<"QuizSubmission"> | Date | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    answers?: StudentAnswerListRelationFilter
  }

  export type QuizSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    quizId?: SortOrder
    studentId?: SortOrder
    score?: SortOrder
    timeTaken?: SortOrder
    submittedAt?: SortOrder
    quiz?: QuizOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
    answers?: StudentAnswerOrderByRelationAggregateInput
  }

  export type QuizSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuizSubmissionWhereInput | QuizSubmissionWhereInput[]
    OR?: QuizSubmissionWhereInput[]
    NOT?: QuizSubmissionWhereInput | QuizSubmissionWhereInput[]
    quizId?: IntFilter<"QuizSubmission"> | number
    studentId?: IntFilter<"QuizSubmission"> | number
    score?: IntFilter<"QuizSubmission"> | number
    timeTaken?: IntFilter<"QuizSubmission"> | number
    submittedAt?: DateTimeFilter<"QuizSubmission"> | Date | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    answers?: StudentAnswerListRelationFilter
  }, "id">

  export type QuizSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    quizId?: SortOrder
    studentId?: SortOrder
    score?: SortOrder
    timeTaken?: SortOrder
    submittedAt?: SortOrder
    _count?: QuizSubmissionCountOrderByAggregateInput
    _avg?: QuizSubmissionAvgOrderByAggregateInput
    _max?: QuizSubmissionMaxOrderByAggregateInput
    _min?: QuizSubmissionMinOrderByAggregateInput
    _sum?: QuizSubmissionSumOrderByAggregateInput
  }

  export type QuizSubmissionScalarWhereWithAggregatesInput = {
    AND?: QuizSubmissionScalarWhereWithAggregatesInput | QuizSubmissionScalarWhereWithAggregatesInput[]
    OR?: QuizSubmissionScalarWhereWithAggregatesInput[]
    NOT?: QuizSubmissionScalarWhereWithAggregatesInput | QuizSubmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QuizSubmission"> | number
    quizId?: IntWithAggregatesFilter<"QuizSubmission"> | number
    studentId?: IntWithAggregatesFilter<"QuizSubmission"> | number
    score?: IntWithAggregatesFilter<"QuizSubmission"> | number
    timeTaken?: IntWithAggregatesFilter<"QuizSubmission"> | number
    submittedAt?: DateTimeWithAggregatesFilter<"QuizSubmission"> | Date | string
  }

  export type StudentAnswerWhereInput = {
    AND?: StudentAnswerWhereInput | StudentAnswerWhereInput[]
    OR?: StudentAnswerWhereInput[]
    NOT?: StudentAnswerWhereInput | StudentAnswerWhereInput[]
    id?: IntFilter<"StudentAnswer"> | number
    submissionId?: IntFilter<"StudentAnswer"> | number
    questionId?: IntFilter<"StudentAnswer"> | number
    selectedOption?: EnumQuestionOptionFilter<"StudentAnswer"> | $Enums.QuestionOption
    submission?: XOR<QuizSubmissionScalarRelationFilter, QuizSubmissionWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type StudentAnswerOrderByWithRelationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    questionId?: SortOrder
    selectedOption?: SortOrder
    submission?: QuizSubmissionOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type StudentAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StudentAnswerWhereInput | StudentAnswerWhereInput[]
    OR?: StudentAnswerWhereInput[]
    NOT?: StudentAnswerWhereInput | StudentAnswerWhereInput[]
    submissionId?: IntFilter<"StudentAnswer"> | number
    questionId?: IntFilter<"StudentAnswer"> | number
    selectedOption?: EnumQuestionOptionFilter<"StudentAnswer"> | $Enums.QuestionOption
    submission?: XOR<QuizSubmissionScalarRelationFilter, QuizSubmissionWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id">

  export type StudentAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    questionId?: SortOrder
    selectedOption?: SortOrder
    _count?: StudentAnswerCountOrderByAggregateInput
    _avg?: StudentAnswerAvgOrderByAggregateInput
    _max?: StudentAnswerMaxOrderByAggregateInput
    _min?: StudentAnswerMinOrderByAggregateInput
    _sum?: StudentAnswerSumOrderByAggregateInput
  }

  export type StudentAnswerScalarWhereWithAggregatesInput = {
    AND?: StudentAnswerScalarWhereWithAggregatesInput | StudentAnswerScalarWhereWithAggregatesInput[]
    OR?: StudentAnswerScalarWhereWithAggregatesInput[]
    NOT?: StudentAnswerScalarWhereWithAggregatesInput | StudentAnswerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StudentAnswer"> | number
    submissionId?: IntWithAggregatesFilter<"StudentAnswer"> | number
    questionId?: IntWithAggregatesFilter<"StudentAnswer"> | number
    selectedOption?: EnumQuestionOptionWithAggregatesFilter<"StudentAnswer"> | $Enums.QuestionOption
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    id?: IntFilter<"Note"> | number
    title?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    userId?: IntFilter<"Note"> | number
    isPublic?: BoolFilter<"Note"> | boolean
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    accesses?: NoteAccessListRelationFilter
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    accesses?: NoteAccessOrderByRelationAggregateInput
    _relevance?: NoteOrderByRelevanceInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    title?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    userId?: IntFilter<"Note"> | number
    isPublic?: BoolFilter<"Note"> | boolean
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    accesses?: NoteAccessListRelationFilter
  }, "id">

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _avg?: NoteAvgOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
    _sum?: NoteSumOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Note"> | number
    title?: StringWithAggregatesFilter<"Note"> | string
    content?: StringWithAggregatesFilter<"Note"> | string
    userId?: IntWithAggregatesFilter<"Note"> | number
    isPublic?: BoolWithAggregatesFilter<"Note"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
  }

  export type TeacherRatingWhereInput = {
    AND?: TeacherRatingWhereInput | TeacherRatingWhereInput[]
    OR?: TeacherRatingWhereInput[]
    NOT?: TeacherRatingWhereInput | TeacherRatingWhereInput[]
    id?: IntFilter<"TeacherRating"> | number
    teacherId?: IntFilter<"TeacherRating"> | number
    studentId?: IntFilter<"TeacherRating"> | number
    rating?: IntFilter<"TeacherRating"> | number
    comment?: StringNullableFilter<"TeacherRating"> | string | null
    createdAt?: DateTimeFilter<"TeacherRating"> | Date | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TeacherRatingOrderByWithRelationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    teacher?: UserOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
    _relevance?: TeacherRatingOrderByRelevanceInput
  }

  export type TeacherRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeacherRatingWhereInput | TeacherRatingWhereInput[]
    OR?: TeacherRatingWhereInput[]
    NOT?: TeacherRatingWhereInput | TeacherRatingWhereInput[]
    teacherId?: IntFilter<"TeacherRating"> | number
    studentId?: IntFilter<"TeacherRating"> | number
    rating?: IntFilter<"TeacherRating"> | number
    comment?: StringNullableFilter<"TeacherRating"> | string | null
    createdAt?: DateTimeFilter<"TeacherRating"> | Date | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TeacherRatingOrderByWithAggregationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TeacherRatingCountOrderByAggregateInput
    _avg?: TeacherRatingAvgOrderByAggregateInput
    _max?: TeacherRatingMaxOrderByAggregateInput
    _min?: TeacherRatingMinOrderByAggregateInput
    _sum?: TeacherRatingSumOrderByAggregateInput
  }

  export type TeacherRatingScalarWhereWithAggregatesInput = {
    AND?: TeacherRatingScalarWhereWithAggregatesInput | TeacherRatingScalarWhereWithAggregatesInput[]
    OR?: TeacherRatingScalarWhereWithAggregatesInput[]
    NOT?: TeacherRatingScalarWhereWithAggregatesInput | TeacherRatingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeacherRating"> | number
    teacherId?: IntWithAggregatesFilter<"TeacherRating"> | number
    studentId?: IntWithAggregatesFilter<"TeacherRating"> | number
    rating?: IntWithAggregatesFilter<"TeacherRating"> | number
    comment?: StringNullableWithAggregatesFilter<"TeacherRating"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TeacherRating"> | Date | string
  }

  export type NoteAccessWhereInput = {
    AND?: NoteAccessWhereInput | NoteAccessWhereInput[]
    OR?: NoteAccessWhereInput[]
    NOT?: NoteAccessWhereInput | NoteAccessWhereInput[]
    id?: IntFilter<"NoteAccess"> | number
    noteId?: IntFilter<"NoteAccess"> | number
    studentId?: IntFilter<"NoteAccess"> | number
    grantedAt?: DateTimeFilter<"NoteAccess"> | Date | string
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NoteAccessOrderByWithRelationInput = {
    id?: SortOrder
    noteId?: SortOrder
    studentId?: SortOrder
    grantedAt?: SortOrder
    note?: NoteOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
  }

  export type NoteAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    unique_note_access?: NoteAccessUnique_note_accessCompoundUniqueInput
    AND?: NoteAccessWhereInput | NoteAccessWhereInput[]
    OR?: NoteAccessWhereInput[]
    NOT?: NoteAccessWhereInput | NoteAccessWhereInput[]
    noteId?: IntFilter<"NoteAccess"> | number
    studentId?: IntFilter<"NoteAccess"> | number
    grantedAt?: DateTimeFilter<"NoteAccess"> | Date | string
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "unique_note_access">

  export type NoteAccessOrderByWithAggregationInput = {
    id?: SortOrder
    noteId?: SortOrder
    studentId?: SortOrder
    grantedAt?: SortOrder
    _count?: NoteAccessCountOrderByAggregateInput
    _avg?: NoteAccessAvgOrderByAggregateInput
    _max?: NoteAccessMaxOrderByAggregateInput
    _min?: NoteAccessMinOrderByAggregateInput
    _sum?: NoteAccessSumOrderByAggregateInput
  }

  export type NoteAccessScalarWhereWithAggregatesInput = {
    AND?: NoteAccessScalarWhereWithAggregatesInput | NoteAccessScalarWhereWithAggregatesInput[]
    OR?: NoteAccessScalarWhereWithAggregatesInput[]
    NOT?: NoteAccessScalarWhereWithAggregatesInput | NoteAccessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NoteAccess"> | number
    noteId?: IntWithAggregatesFilter<"NoteAccess"> | number
    studentId?: IntWithAggregatesFilter<"NoteAccess"> | number
    grantedAt?: DateTimeWithAggregatesFilter<"NoteAccess"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    role: $Enums.Role
    firstName?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizCreateNestedManyWithoutTeacherInput
    quizSubmissions?: QuizSubmissionCreateNestedManyWithoutStudentInput
    teacherRatings?: TeacherRatingCreateNestedManyWithoutTeacherInput
    studentRatings?: TeacherRatingCreateNestedManyWithoutStudentInput
    notes?: NoteCreateNestedManyWithoutUserInput
    noteAccesses?: NoteAccessCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.Role
    firstName?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizUncheckedCreateNestedManyWithoutTeacherInput
    quizSubmissions?: QuizSubmissionUncheckedCreateNestedManyWithoutStudentInput
    teacherRatings?: TeacherRatingUncheckedCreateNestedManyWithoutTeacherInput
    studentRatings?: TeacherRatingUncheckedCreateNestedManyWithoutStudentInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    noteAccesses?: NoteAccessUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUpdateManyWithoutTeacherNestedInput
    quizSubmissions?: QuizSubmissionUpdateManyWithoutStudentNestedInput
    teacherRatings?: TeacherRatingUpdateManyWithoutTeacherNestedInput
    studentRatings?: TeacherRatingUpdateManyWithoutStudentNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    noteAccesses?: NoteAccessUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUncheckedUpdateManyWithoutTeacherNestedInput
    quizSubmissions?: QuizSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    teacherRatings?: TeacherRatingUncheckedUpdateManyWithoutTeacherNestedInput
    studentRatings?: TeacherRatingUncheckedUpdateManyWithoutStudentNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    noteAccesses?: NoteAccessUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.Role
    firstName?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateInput = {
    title: string
    description?: string | null
    timeLimit: number
    passingScore: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutQuizzesInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
    submissions?: QuizSubmissionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    teacherId: number
    timeLimit: number
    passingScore: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    submissions?: QuizSubmissionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutQuizzesNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
    submissions?: QuizSubmissionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    submissions?: QuizSubmissionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    teacherId: number
    timeLimit: number
    passingScore: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    text: string
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: $Enums.QuestionOption
    createdAt?: Date | string
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    answers?: StudentAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    quizId: number
    text: string
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: $Enums.QuestionOption
    createdAt?: Date | string
    answers?: StudentAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: EnumQuestionOptionFieldUpdateOperationsInput | $Enums.QuestionOption
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: StudentAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: EnumQuestionOptionFieldUpdateOperationsInput | $Enums.QuestionOption
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: StudentAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: number
    quizId: number
    text: string
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: $Enums.QuestionOption
    createdAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: EnumQuestionOptionFieldUpdateOperationsInput | $Enums.QuestionOption
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: EnumQuestionOptionFieldUpdateOperationsInput | $Enums.QuestionOption
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizSubmissionCreateInput = {
    score: number
    timeTaken: number
    submittedAt?: Date | string
    quiz: QuizCreateNestedOneWithoutSubmissionsInput
    student: UserCreateNestedOneWithoutQuizSubmissionsInput
    answers?: StudentAnswerCreateNestedManyWithoutSubmissionInput
  }

  export type QuizSubmissionUncheckedCreateInput = {
    id?: number
    quizId: number
    studentId: number
    score: number
    timeTaken: number
    submittedAt?: Date | string
    answers?: StudentAnswerUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type QuizSubmissionUpdateInput = {
    score?: IntFieldUpdateOperationsInput | number
    timeTaken?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutSubmissionsNestedInput
    student?: UserUpdateOneRequiredWithoutQuizSubmissionsNestedInput
    answers?: StudentAnswerUpdateManyWithoutSubmissionNestedInput
  }

  export type QuizSubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    timeTaken?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: StudentAnswerUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type QuizSubmissionCreateManyInput = {
    id?: number
    quizId: number
    studentId: number
    score: number
    timeTaken: number
    submittedAt?: Date | string
  }

  export type QuizSubmissionUpdateManyMutationInput = {
    score?: IntFieldUpdateOperationsInput | number
    timeTaken?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizSubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    timeTaken?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAnswerCreateInput = {
    selectedOption: $Enums.QuestionOption
    submission: QuizSubmissionCreateNestedOneWithoutAnswersInput
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type StudentAnswerUncheckedCreateInput = {
    id?: number
    submissionId: number
    questionId: number
    selectedOption: $Enums.QuestionOption
  }

  export type StudentAnswerUpdateInput = {
    selectedOption?: EnumQuestionOptionFieldUpdateOperationsInput | $Enums.QuestionOption
    submission?: QuizSubmissionUpdateOneRequiredWithoutAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type StudentAnswerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    submissionId?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    selectedOption?: EnumQuestionOptionFieldUpdateOperationsInput | $Enums.QuestionOption
  }

  export type StudentAnswerCreateManyInput = {
    id?: number
    submissionId: number
    questionId: number
    selectedOption: $Enums.QuestionOption
  }

  export type StudentAnswerUpdateManyMutationInput = {
    selectedOption?: EnumQuestionOptionFieldUpdateOperationsInput | $Enums.QuestionOption
  }

  export type StudentAnswerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    submissionId?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    selectedOption?: EnumQuestionOptionFieldUpdateOperationsInput | $Enums.QuestionOption
  }

  export type NoteCreateInput = {
    title: string
    content: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotesInput
    accesses?: NoteAccessCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    userId: number
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accesses?: NoteAccessUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotesNestedInput
    accesses?: NoteAccessUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accesses?: NoteAccessUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type NoteCreateManyInput = {
    id?: number
    title: string
    content: string
    userId: number
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherRatingCreateInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    teacher: UserCreateNestedOneWithoutTeacherRatingsInput
    student: UserCreateNestedOneWithoutStudentRatingsInput
  }

  export type TeacherRatingUncheckedCreateInput = {
    id?: number
    teacherId: number
    studentId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type TeacherRatingUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutTeacherRatingsNestedInput
    student?: UserUpdateOneRequiredWithoutStudentRatingsNestedInput
  }

  export type TeacherRatingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherRatingCreateManyInput = {
    id?: number
    teacherId: number
    studentId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type TeacherRatingUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherRatingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteAccessCreateInput = {
    grantedAt?: Date | string
    note: NoteCreateNestedOneWithoutAccessesInput
    student: UserCreateNestedOneWithoutNoteAccessesInput
  }

  export type NoteAccessUncheckedCreateInput = {
    id?: number
    noteId: number
    studentId: number
    grantedAt?: Date | string
  }

  export type NoteAccessUpdateInput = {
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NoteUpdateOneRequiredWithoutAccessesNestedInput
    student?: UserUpdateOneRequiredWithoutNoteAccessesNestedInput
  }

  export type NoteAccessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    noteId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteAccessCreateManyInput = {
    id?: number
    noteId: number
    studentId: number
    grantedAt?: Date | string
  }

  export type NoteAccessUpdateManyMutationInput = {
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteAccessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    noteId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type QuizSubmissionListRelationFilter = {
    every?: QuizSubmissionWhereInput
    some?: QuizSubmissionWhereInput
    none?: QuizSubmissionWhereInput
  }

  export type TeacherRatingListRelationFilter = {
    every?: TeacherRatingWhereInput
    some?: TeacherRatingWhereInput
    none?: TeacherRatingWhereInput
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type NoteAccessListRelationFilter = {
    every?: NoteAccessWhereInput
    some?: NoteAccessWhereInput
    none?: NoteAccessWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherRatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profilePicture?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profilePicture?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profilePicture?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizOrderByRelevanceInput = {
    fields: QuizOrderByRelevanceFieldEnum | QuizOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    teacherId?: SortOrder
    timeLimit?: SortOrder
    passingScore?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    timeLimit?: SortOrder
    passingScore?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    teacherId?: SortOrder
    timeLimit?: SortOrder
    passingScore?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    teacherId?: SortOrder
    timeLimit?: SortOrder
    passingScore?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    timeLimit?: SortOrder
    passingScore?: SortOrder
  }

  export type EnumQuestionOptionFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionOption | EnumQuestionOptionFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionOption[]
    notIn?: $Enums.QuestionOption[]
    not?: NestedEnumQuestionOptionFilter<$PrismaModel> | $Enums.QuestionOption
  }

  export type QuizScalarRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type StudentAnswerListRelationFilter = {
    every?: StudentAnswerWhereInput
    some?: StudentAnswerWhereInput
    none?: StudentAnswerWhereInput
  }

  export type StudentAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOrderByRelevanceInput = {
    fields: QuestionOrderByRelevanceFieldEnum | QuestionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    text?: SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    correctOption?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    text?: SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    correctOption?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    text?: SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    correctOption?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type EnumQuestionOptionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionOption | EnumQuestionOptionFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionOption[]
    notIn?: $Enums.QuestionOption[]
    not?: NestedEnumQuestionOptionWithAggregatesFilter<$PrismaModel> | $Enums.QuestionOption
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionOptionFilter<$PrismaModel>
    _max?: NestedEnumQuestionOptionFilter<$PrismaModel>
  }

  export type QuizSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    studentId?: SortOrder
    score?: SortOrder
    timeTaken?: SortOrder
    submittedAt?: SortOrder
  }

  export type QuizSubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    studentId?: SortOrder
    score?: SortOrder
    timeTaken?: SortOrder
  }

  export type QuizSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    studentId?: SortOrder
    score?: SortOrder
    timeTaken?: SortOrder
    submittedAt?: SortOrder
  }

  export type QuizSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    studentId?: SortOrder
    score?: SortOrder
    timeTaken?: SortOrder
    submittedAt?: SortOrder
  }

  export type QuizSubmissionSumOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    studentId?: SortOrder
    score?: SortOrder
    timeTaken?: SortOrder
  }

  export type QuizSubmissionScalarRelationFilter = {
    is?: QuizSubmissionWhereInput
    isNot?: QuizSubmissionWhereInput
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type StudentAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    questionId?: SortOrder
    selectedOption?: SortOrder
  }

  export type StudentAnswerAvgOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    questionId?: SortOrder
  }

  export type StudentAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    questionId?: SortOrder
    selectedOption?: SortOrder
  }

  export type StudentAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    questionId?: SortOrder
    selectedOption?: SortOrder
  }

  export type StudentAnswerSumOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    questionId?: SortOrder
  }

  export type NoteOrderByRelevanceInput = {
    fields: NoteOrderByRelevanceFieldEnum | NoteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TeacherRatingOrderByRelevanceInput = {
    fields: TeacherRatingOrderByRelevanceFieldEnum | TeacherRatingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TeacherRatingCountOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type TeacherRatingAvgOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
  }

  export type TeacherRatingMaxOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type TeacherRatingMinOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type TeacherRatingSumOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
  }

  export type NoteScalarRelationFilter = {
    is?: NoteWhereInput
    isNot?: NoteWhereInput
  }

  export type NoteAccessUnique_note_accessCompoundUniqueInput = {
    noteId: number
    studentId: number
  }

  export type NoteAccessCountOrderByAggregateInput = {
    id?: SortOrder
    noteId?: SortOrder
    studentId?: SortOrder
    grantedAt?: SortOrder
  }

  export type NoteAccessAvgOrderByAggregateInput = {
    id?: SortOrder
    noteId?: SortOrder
    studentId?: SortOrder
  }

  export type NoteAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    noteId?: SortOrder
    studentId?: SortOrder
    grantedAt?: SortOrder
  }

  export type NoteAccessMinOrderByAggregateInput = {
    id?: SortOrder
    noteId?: SortOrder
    studentId?: SortOrder
    grantedAt?: SortOrder
  }

  export type NoteAccessSumOrderByAggregateInput = {
    id?: SortOrder
    noteId?: SortOrder
    studentId?: SortOrder
  }

  export type QuizCreateNestedManyWithoutTeacherInput = {
    create?: XOR<QuizCreateWithoutTeacherInput, QuizUncheckedCreateWithoutTeacherInput> | QuizCreateWithoutTeacherInput[] | QuizUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutTeacherInput | QuizCreateOrConnectWithoutTeacherInput[]
    createMany?: QuizCreateManyTeacherInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type QuizSubmissionCreateNestedManyWithoutStudentInput = {
    create?: XOR<QuizSubmissionCreateWithoutStudentInput, QuizSubmissionUncheckedCreateWithoutStudentInput> | QuizSubmissionCreateWithoutStudentInput[] | QuizSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: QuizSubmissionCreateOrConnectWithoutStudentInput | QuizSubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: QuizSubmissionCreateManyStudentInputEnvelope
    connect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
  }

  export type TeacherRatingCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherRatingCreateWithoutTeacherInput, TeacherRatingUncheckedCreateWithoutTeacherInput> | TeacherRatingCreateWithoutTeacherInput[] | TeacherRatingUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherRatingCreateOrConnectWithoutTeacherInput | TeacherRatingCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherRatingCreateManyTeacherInputEnvelope
    connect?: TeacherRatingWhereUniqueInput | TeacherRatingWhereUniqueInput[]
  }

  export type TeacherRatingCreateNestedManyWithoutStudentInput = {
    create?: XOR<TeacherRatingCreateWithoutStudentInput, TeacherRatingUncheckedCreateWithoutStudentInput> | TeacherRatingCreateWithoutStudentInput[] | TeacherRatingUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TeacherRatingCreateOrConnectWithoutStudentInput | TeacherRatingCreateOrConnectWithoutStudentInput[]
    createMany?: TeacherRatingCreateManyStudentInputEnvelope
    connect?: TeacherRatingWhereUniqueInput | TeacherRatingWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type NoteAccessCreateNestedManyWithoutStudentInput = {
    create?: XOR<NoteAccessCreateWithoutStudentInput, NoteAccessUncheckedCreateWithoutStudentInput> | NoteAccessCreateWithoutStudentInput[] | NoteAccessUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: NoteAccessCreateOrConnectWithoutStudentInput | NoteAccessCreateOrConnectWithoutStudentInput[]
    createMany?: NoteAccessCreateManyStudentInputEnvelope
    connect?: NoteAccessWhereUniqueInput | NoteAccessWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<QuizCreateWithoutTeacherInput, QuizUncheckedCreateWithoutTeacherInput> | QuizCreateWithoutTeacherInput[] | QuizUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutTeacherInput | QuizCreateOrConnectWithoutTeacherInput[]
    createMany?: QuizCreateManyTeacherInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type QuizSubmissionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<QuizSubmissionCreateWithoutStudentInput, QuizSubmissionUncheckedCreateWithoutStudentInput> | QuizSubmissionCreateWithoutStudentInput[] | QuizSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: QuizSubmissionCreateOrConnectWithoutStudentInput | QuizSubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: QuizSubmissionCreateManyStudentInputEnvelope
    connect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
  }

  export type TeacherRatingUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherRatingCreateWithoutTeacherInput, TeacherRatingUncheckedCreateWithoutTeacherInput> | TeacherRatingCreateWithoutTeacherInput[] | TeacherRatingUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherRatingCreateOrConnectWithoutTeacherInput | TeacherRatingCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherRatingCreateManyTeacherInputEnvelope
    connect?: TeacherRatingWhereUniqueInput | TeacherRatingWhereUniqueInput[]
  }

  export type TeacherRatingUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<TeacherRatingCreateWithoutStudentInput, TeacherRatingUncheckedCreateWithoutStudentInput> | TeacherRatingCreateWithoutStudentInput[] | TeacherRatingUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TeacherRatingCreateOrConnectWithoutStudentInput | TeacherRatingCreateOrConnectWithoutStudentInput[]
    createMany?: TeacherRatingCreateManyStudentInputEnvelope
    connect?: TeacherRatingWhereUniqueInput | TeacherRatingWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type NoteAccessUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<NoteAccessCreateWithoutStudentInput, NoteAccessUncheckedCreateWithoutStudentInput> | NoteAccessCreateWithoutStudentInput[] | NoteAccessUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: NoteAccessCreateOrConnectWithoutStudentInput | NoteAccessCreateOrConnectWithoutStudentInput[]
    createMany?: NoteAccessCreateManyStudentInputEnvelope
    connect?: NoteAccessWhereUniqueInput | NoteAccessWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type QuizUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<QuizCreateWithoutTeacherInput, QuizUncheckedCreateWithoutTeacherInput> | QuizCreateWithoutTeacherInput[] | QuizUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutTeacherInput | QuizCreateOrConnectWithoutTeacherInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutTeacherInput | QuizUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: QuizCreateManyTeacherInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutTeacherInput | QuizUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutTeacherInput | QuizUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type QuizSubmissionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<QuizSubmissionCreateWithoutStudentInput, QuizSubmissionUncheckedCreateWithoutStudentInput> | QuizSubmissionCreateWithoutStudentInput[] | QuizSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: QuizSubmissionCreateOrConnectWithoutStudentInput | QuizSubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: QuizSubmissionUpsertWithWhereUniqueWithoutStudentInput | QuizSubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: QuizSubmissionCreateManyStudentInputEnvelope
    set?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    disconnect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    delete?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    connect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    update?: QuizSubmissionUpdateWithWhereUniqueWithoutStudentInput | QuizSubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: QuizSubmissionUpdateManyWithWhereWithoutStudentInput | QuizSubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: QuizSubmissionScalarWhereInput | QuizSubmissionScalarWhereInput[]
  }

  export type TeacherRatingUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherRatingCreateWithoutTeacherInput, TeacherRatingUncheckedCreateWithoutTeacherInput> | TeacherRatingCreateWithoutTeacherInput[] | TeacherRatingUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherRatingCreateOrConnectWithoutTeacherInput | TeacherRatingCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherRatingUpsertWithWhereUniqueWithoutTeacherInput | TeacherRatingUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherRatingCreateManyTeacherInputEnvelope
    set?: TeacherRatingWhereUniqueInput | TeacherRatingWhereUniqueInput[]
    disconnect?: TeacherRatingWhereUniqueInput | TeacherRatingWhereUniqueInput[]
    delete?: TeacherRatingWhereUniqueInput | TeacherRatingWhereUniqueInput[]
    connect?: TeacherRatingWhereUniqueInput | TeacherRatingWhereUniqueInput[]
    update?: TeacherRatingUpdateWithWhereUniqueWithoutTeacherInput | TeacherRatingUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherRatingUpdateManyWithWhereWithoutTeacherInput | TeacherRatingUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherRatingScalarWhereInput | TeacherRatingScalarWhereInput[]
  }

  export type TeacherRatingUpdateManyWithoutStudentNestedInput = {
    create?: XOR<TeacherRatingCreateWithoutStudentInput, TeacherRatingUncheckedCreateWithoutStudentInput> | TeacherRatingCreateWithoutStudentInput[] | TeacherRatingUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TeacherRatingCreateOrConnectWithoutStudentInput | TeacherRatingCreateOrConnectWithoutStudentInput[]
    upsert?: TeacherRatingUpsertWithWhereUniqueWithoutStudentInput | TeacherRatingUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: TeacherRatingCreateManyStudentInputEnvelope
    set?: TeacherRatingWhereUniqueInput | TeacherRatingWhereUniqueInput[]
    disconnect?: TeacherRatingWhereUniqueInput | TeacherRatingWhereUniqueInput[]
    delete?: TeacherRatingWhereUniqueInput | TeacherRatingWhereUniqueInput[]
    connect?: TeacherRatingWhereUniqueInput | TeacherRatingWhereUniqueInput[]
    update?: TeacherRatingUpdateWithWhereUniqueWithoutStudentInput | TeacherRatingUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: TeacherRatingUpdateManyWithWhereWithoutStudentInput | TeacherRatingUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: TeacherRatingScalarWhereInput | TeacherRatingScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutUserInput | NoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutUserInput | NoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutUserInput | NoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type NoteAccessUpdateManyWithoutStudentNestedInput = {
    create?: XOR<NoteAccessCreateWithoutStudentInput, NoteAccessUncheckedCreateWithoutStudentInput> | NoteAccessCreateWithoutStudentInput[] | NoteAccessUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: NoteAccessCreateOrConnectWithoutStudentInput | NoteAccessCreateOrConnectWithoutStudentInput[]
    upsert?: NoteAccessUpsertWithWhereUniqueWithoutStudentInput | NoteAccessUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: NoteAccessCreateManyStudentInputEnvelope
    set?: NoteAccessWhereUniqueInput | NoteAccessWhereUniqueInput[]
    disconnect?: NoteAccessWhereUniqueInput | NoteAccessWhereUniqueInput[]
    delete?: NoteAccessWhereUniqueInput | NoteAccessWhereUniqueInput[]
    connect?: NoteAccessWhereUniqueInput | NoteAccessWhereUniqueInput[]
    update?: NoteAccessUpdateWithWhereUniqueWithoutStudentInput | NoteAccessUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: NoteAccessUpdateManyWithWhereWithoutStudentInput | NoteAccessUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: NoteAccessScalarWhereInput | NoteAccessScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuizUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<QuizCreateWithoutTeacherInput, QuizUncheckedCreateWithoutTeacherInput> | QuizCreateWithoutTeacherInput[] | QuizUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutTeacherInput | QuizCreateOrConnectWithoutTeacherInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutTeacherInput | QuizUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: QuizCreateManyTeacherInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutTeacherInput | QuizUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutTeacherInput | QuizUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type QuizSubmissionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<QuizSubmissionCreateWithoutStudentInput, QuizSubmissionUncheckedCreateWithoutStudentInput> | QuizSubmissionCreateWithoutStudentInput[] | QuizSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: QuizSubmissionCreateOrConnectWithoutStudentInput | QuizSubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: QuizSubmissionUpsertWithWhereUniqueWithoutStudentInput | QuizSubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: QuizSubmissionCreateManyStudentInputEnvelope
    set?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    disconnect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    delete?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    connect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    update?: QuizSubmissionUpdateWithWhereUniqueWithoutStudentInput | QuizSubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: QuizSubmissionUpdateManyWithWhereWithoutStudentInput | QuizSubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: QuizSubmissionScalarWhereInput | QuizSubmissionScalarWhereInput[]
  }

  export type TeacherRatingUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherRatingCreateWithoutTeacherInput, TeacherRatingUncheckedCreateWithoutTeacherInput> | TeacherRatingCreateWithoutTeacherInput[] | TeacherRatingUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherRatingCreateOrConnectWithoutTeacherInput | TeacherRatingCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherRatingUpsertWithWhereUniqueWithoutTeacherInput | TeacherRatingUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherRatingCreateManyTeacherInputEnvelope
    set?: TeacherRatingWhereUniqueInput | TeacherRatingWhereUniqueInput[]
    disconnect?: TeacherRatingWhereUniqueInput | TeacherRatingWhereUniqueInput[]
    delete?: TeacherRatingWhereUniqueInput | TeacherRatingWhereUniqueInput[]
    connect?: TeacherRatingWhereUniqueInput | TeacherRatingWhereUniqueInput[]
    update?: TeacherRatingUpdateWithWhereUniqueWithoutTeacherInput | TeacherRatingUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherRatingUpdateManyWithWhereWithoutTeacherInput | TeacherRatingUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherRatingScalarWhereInput | TeacherRatingScalarWhereInput[]
  }

  export type TeacherRatingUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<TeacherRatingCreateWithoutStudentInput, TeacherRatingUncheckedCreateWithoutStudentInput> | TeacherRatingCreateWithoutStudentInput[] | TeacherRatingUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TeacherRatingCreateOrConnectWithoutStudentInput | TeacherRatingCreateOrConnectWithoutStudentInput[]
    upsert?: TeacherRatingUpsertWithWhereUniqueWithoutStudentInput | TeacherRatingUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: TeacherRatingCreateManyStudentInputEnvelope
    set?: TeacherRatingWhereUniqueInput | TeacherRatingWhereUniqueInput[]
    disconnect?: TeacherRatingWhereUniqueInput | TeacherRatingWhereUniqueInput[]
    delete?: TeacherRatingWhereUniqueInput | TeacherRatingWhereUniqueInput[]
    connect?: TeacherRatingWhereUniqueInput | TeacherRatingWhereUniqueInput[]
    update?: TeacherRatingUpdateWithWhereUniqueWithoutStudentInput | TeacherRatingUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: TeacherRatingUpdateManyWithWhereWithoutStudentInput | TeacherRatingUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: TeacherRatingScalarWhereInput | TeacherRatingScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutUserInput | NoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutUserInput | NoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutUserInput | NoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type NoteAccessUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<NoteAccessCreateWithoutStudentInput, NoteAccessUncheckedCreateWithoutStudentInput> | NoteAccessCreateWithoutStudentInput[] | NoteAccessUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: NoteAccessCreateOrConnectWithoutStudentInput | NoteAccessCreateOrConnectWithoutStudentInput[]
    upsert?: NoteAccessUpsertWithWhereUniqueWithoutStudentInput | NoteAccessUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: NoteAccessCreateManyStudentInputEnvelope
    set?: NoteAccessWhereUniqueInput | NoteAccessWhereUniqueInput[]
    disconnect?: NoteAccessWhereUniqueInput | NoteAccessWhereUniqueInput[]
    delete?: NoteAccessWhereUniqueInput | NoteAccessWhereUniqueInput[]
    connect?: NoteAccessWhereUniqueInput | NoteAccessWhereUniqueInput[]
    update?: NoteAccessUpdateWithWhereUniqueWithoutStudentInput | NoteAccessUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: NoteAccessUpdateManyWithWhereWithoutStudentInput | NoteAccessUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: NoteAccessScalarWhereInput | NoteAccessScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<UserCreateWithoutQuizzesInput, UserUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizzesInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuizSubmissionCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizSubmissionCreateWithoutQuizInput, QuizSubmissionUncheckedCreateWithoutQuizInput> | QuizSubmissionCreateWithoutQuizInput[] | QuizSubmissionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizSubmissionCreateOrConnectWithoutQuizInput | QuizSubmissionCreateOrConnectWithoutQuizInput[]
    createMany?: QuizSubmissionCreateManyQuizInputEnvelope
    connect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuizSubmissionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizSubmissionCreateWithoutQuizInput, QuizSubmissionUncheckedCreateWithoutQuizInput> | QuizSubmissionCreateWithoutQuizInput[] | QuizSubmissionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizSubmissionCreateOrConnectWithoutQuizInput | QuizSubmissionCreateOrConnectWithoutQuizInput[]
    createMany?: QuizSubmissionCreateManyQuizInputEnvelope
    connect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutQuizzesNestedInput = {
    create?: XOR<UserCreateWithoutQuizzesInput, UserUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizzesInput
    upsert?: UserUpsertWithoutQuizzesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuizzesInput, UserUpdateWithoutQuizzesInput>, UserUncheckedUpdateWithoutQuizzesInput>
  }

  export type QuestionUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuizSubmissionUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizSubmissionCreateWithoutQuizInput, QuizSubmissionUncheckedCreateWithoutQuizInput> | QuizSubmissionCreateWithoutQuizInput[] | QuizSubmissionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizSubmissionCreateOrConnectWithoutQuizInput | QuizSubmissionCreateOrConnectWithoutQuizInput[]
    upsert?: QuizSubmissionUpsertWithWhereUniqueWithoutQuizInput | QuizSubmissionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizSubmissionCreateManyQuizInputEnvelope
    set?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    disconnect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    delete?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    connect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    update?: QuizSubmissionUpdateWithWhereUniqueWithoutQuizInput | QuizSubmissionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizSubmissionUpdateManyWithWhereWithoutQuizInput | QuizSubmissionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizSubmissionScalarWhereInput | QuizSubmissionScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuizSubmissionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizSubmissionCreateWithoutQuizInput, QuizSubmissionUncheckedCreateWithoutQuizInput> | QuizSubmissionCreateWithoutQuizInput[] | QuizSubmissionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizSubmissionCreateOrConnectWithoutQuizInput | QuizSubmissionCreateOrConnectWithoutQuizInput[]
    upsert?: QuizSubmissionUpsertWithWhereUniqueWithoutQuizInput | QuizSubmissionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizSubmissionCreateManyQuizInputEnvelope
    set?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    disconnect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    delete?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    connect?: QuizSubmissionWhereUniqueInput | QuizSubmissionWhereUniqueInput[]
    update?: QuizSubmissionUpdateWithWhereUniqueWithoutQuizInput | QuizSubmissionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizSubmissionUpdateManyWithWhereWithoutQuizInput | QuizSubmissionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizSubmissionScalarWhereInput | QuizSubmissionScalarWhereInput[]
  }

  export type QuizCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    connect?: QuizWhereUniqueInput
  }

  export type StudentAnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<StudentAnswerCreateWithoutQuestionInput, StudentAnswerUncheckedCreateWithoutQuestionInput> | StudentAnswerCreateWithoutQuestionInput[] | StudentAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: StudentAnswerCreateOrConnectWithoutQuestionInput | StudentAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: StudentAnswerCreateManyQuestionInputEnvelope
    connect?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
  }

  export type StudentAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<StudentAnswerCreateWithoutQuestionInput, StudentAnswerUncheckedCreateWithoutQuestionInput> | StudentAnswerCreateWithoutQuestionInput[] | StudentAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: StudentAnswerCreateOrConnectWithoutQuestionInput | StudentAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: StudentAnswerCreateManyQuestionInputEnvelope
    connect?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
  }

  export type EnumQuestionOptionFieldUpdateOperationsInput = {
    set?: $Enums.QuestionOption
  }

  export type QuizUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    upsert?: QuizUpsertWithoutQuestionsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutQuestionsInput, QuizUpdateWithoutQuestionsInput>, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type StudentAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<StudentAnswerCreateWithoutQuestionInput, StudentAnswerUncheckedCreateWithoutQuestionInput> | StudentAnswerCreateWithoutQuestionInput[] | StudentAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: StudentAnswerCreateOrConnectWithoutQuestionInput | StudentAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: StudentAnswerUpsertWithWhereUniqueWithoutQuestionInput | StudentAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: StudentAnswerCreateManyQuestionInputEnvelope
    set?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    disconnect?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    delete?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    connect?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    update?: StudentAnswerUpdateWithWhereUniqueWithoutQuestionInput | StudentAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: StudentAnswerUpdateManyWithWhereWithoutQuestionInput | StudentAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: StudentAnswerScalarWhereInput | StudentAnswerScalarWhereInput[]
  }

  export type StudentAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<StudentAnswerCreateWithoutQuestionInput, StudentAnswerUncheckedCreateWithoutQuestionInput> | StudentAnswerCreateWithoutQuestionInput[] | StudentAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: StudentAnswerCreateOrConnectWithoutQuestionInput | StudentAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: StudentAnswerUpsertWithWhereUniqueWithoutQuestionInput | StudentAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: StudentAnswerCreateManyQuestionInputEnvelope
    set?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    disconnect?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    delete?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    connect?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    update?: StudentAnswerUpdateWithWhereUniqueWithoutQuestionInput | StudentAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: StudentAnswerUpdateManyWithWhereWithoutQuestionInput | StudentAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: StudentAnswerScalarWhereInput | StudentAnswerScalarWhereInput[]
  }

  export type QuizCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<QuizCreateWithoutSubmissionsInput, QuizUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutSubmissionsInput
    connect?: QuizWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutQuizSubmissionsInput = {
    create?: XOR<UserCreateWithoutQuizSubmissionsInput, UserUncheckedCreateWithoutQuizSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type StudentAnswerCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<StudentAnswerCreateWithoutSubmissionInput, StudentAnswerUncheckedCreateWithoutSubmissionInput> | StudentAnswerCreateWithoutSubmissionInput[] | StudentAnswerUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: StudentAnswerCreateOrConnectWithoutSubmissionInput | StudentAnswerCreateOrConnectWithoutSubmissionInput[]
    createMany?: StudentAnswerCreateManySubmissionInputEnvelope
    connect?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
  }

  export type StudentAnswerUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<StudentAnswerCreateWithoutSubmissionInput, StudentAnswerUncheckedCreateWithoutSubmissionInput> | StudentAnswerCreateWithoutSubmissionInput[] | StudentAnswerUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: StudentAnswerCreateOrConnectWithoutSubmissionInput | StudentAnswerCreateOrConnectWithoutSubmissionInput[]
    createMany?: StudentAnswerCreateManySubmissionInputEnvelope
    connect?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
  }

  export type QuizUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<QuizCreateWithoutSubmissionsInput, QuizUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutSubmissionsInput
    upsert?: QuizUpsertWithoutSubmissionsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutSubmissionsInput, QuizUpdateWithoutSubmissionsInput>, QuizUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateOneRequiredWithoutQuizSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutQuizSubmissionsInput, UserUncheckedCreateWithoutQuizSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizSubmissionsInput
    upsert?: UserUpsertWithoutQuizSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuizSubmissionsInput, UserUpdateWithoutQuizSubmissionsInput>, UserUncheckedUpdateWithoutQuizSubmissionsInput>
  }

  export type StudentAnswerUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<StudentAnswerCreateWithoutSubmissionInput, StudentAnswerUncheckedCreateWithoutSubmissionInput> | StudentAnswerCreateWithoutSubmissionInput[] | StudentAnswerUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: StudentAnswerCreateOrConnectWithoutSubmissionInput | StudentAnswerCreateOrConnectWithoutSubmissionInput[]
    upsert?: StudentAnswerUpsertWithWhereUniqueWithoutSubmissionInput | StudentAnswerUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: StudentAnswerCreateManySubmissionInputEnvelope
    set?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    disconnect?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    delete?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    connect?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    update?: StudentAnswerUpdateWithWhereUniqueWithoutSubmissionInput | StudentAnswerUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: StudentAnswerUpdateManyWithWhereWithoutSubmissionInput | StudentAnswerUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: StudentAnswerScalarWhereInput | StudentAnswerScalarWhereInput[]
  }

  export type StudentAnswerUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<StudentAnswerCreateWithoutSubmissionInput, StudentAnswerUncheckedCreateWithoutSubmissionInput> | StudentAnswerCreateWithoutSubmissionInput[] | StudentAnswerUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: StudentAnswerCreateOrConnectWithoutSubmissionInput | StudentAnswerCreateOrConnectWithoutSubmissionInput[]
    upsert?: StudentAnswerUpsertWithWhereUniqueWithoutSubmissionInput | StudentAnswerUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: StudentAnswerCreateManySubmissionInputEnvelope
    set?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    disconnect?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    delete?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    connect?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    update?: StudentAnswerUpdateWithWhereUniqueWithoutSubmissionInput | StudentAnswerUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: StudentAnswerUpdateManyWithWhereWithoutSubmissionInput | StudentAnswerUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: StudentAnswerScalarWhereInput | StudentAnswerScalarWhereInput[]
  }

  export type QuizSubmissionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuizSubmissionCreateWithoutAnswersInput, QuizSubmissionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuizSubmissionCreateOrConnectWithoutAnswersInput
    connect?: QuizSubmissionWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuizSubmissionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuizSubmissionCreateWithoutAnswersInput, QuizSubmissionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuizSubmissionCreateOrConnectWithoutAnswersInput
    upsert?: QuizSubmissionUpsertWithoutAnswersInput
    connect?: QuizSubmissionWhereUniqueInput
    update?: XOR<XOR<QuizSubmissionUpdateToOneWithWhereWithoutAnswersInput, QuizSubmissionUpdateWithoutAnswersInput>, QuizSubmissionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type UserCreateNestedOneWithoutNotesInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    connect?: UserWhereUniqueInput
  }

  export type NoteAccessCreateNestedManyWithoutNoteInput = {
    create?: XOR<NoteAccessCreateWithoutNoteInput, NoteAccessUncheckedCreateWithoutNoteInput> | NoteAccessCreateWithoutNoteInput[] | NoteAccessUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteAccessCreateOrConnectWithoutNoteInput | NoteAccessCreateOrConnectWithoutNoteInput[]
    createMany?: NoteAccessCreateManyNoteInputEnvelope
    connect?: NoteAccessWhereUniqueInput | NoteAccessWhereUniqueInput[]
  }

  export type NoteAccessUncheckedCreateNestedManyWithoutNoteInput = {
    create?: XOR<NoteAccessCreateWithoutNoteInput, NoteAccessUncheckedCreateWithoutNoteInput> | NoteAccessCreateWithoutNoteInput[] | NoteAccessUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteAccessCreateOrConnectWithoutNoteInput | NoteAccessCreateOrConnectWithoutNoteInput[]
    createMany?: NoteAccessCreateManyNoteInputEnvelope
    connect?: NoteAccessWhereUniqueInput | NoteAccessWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    upsert?: UserUpsertWithoutNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotesInput, UserUpdateWithoutNotesInput>, UserUncheckedUpdateWithoutNotesInput>
  }

  export type NoteAccessUpdateManyWithoutNoteNestedInput = {
    create?: XOR<NoteAccessCreateWithoutNoteInput, NoteAccessUncheckedCreateWithoutNoteInput> | NoteAccessCreateWithoutNoteInput[] | NoteAccessUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteAccessCreateOrConnectWithoutNoteInput | NoteAccessCreateOrConnectWithoutNoteInput[]
    upsert?: NoteAccessUpsertWithWhereUniqueWithoutNoteInput | NoteAccessUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: NoteAccessCreateManyNoteInputEnvelope
    set?: NoteAccessWhereUniqueInput | NoteAccessWhereUniqueInput[]
    disconnect?: NoteAccessWhereUniqueInput | NoteAccessWhereUniqueInput[]
    delete?: NoteAccessWhereUniqueInput | NoteAccessWhereUniqueInput[]
    connect?: NoteAccessWhereUniqueInput | NoteAccessWhereUniqueInput[]
    update?: NoteAccessUpdateWithWhereUniqueWithoutNoteInput | NoteAccessUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: NoteAccessUpdateManyWithWhereWithoutNoteInput | NoteAccessUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: NoteAccessScalarWhereInput | NoteAccessScalarWhereInput[]
  }

  export type NoteAccessUncheckedUpdateManyWithoutNoteNestedInput = {
    create?: XOR<NoteAccessCreateWithoutNoteInput, NoteAccessUncheckedCreateWithoutNoteInput> | NoteAccessCreateWithoutNoteInput[] | NoteAccessUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteAccessCreateOrConnectWithoutNoteInput | NoteAccessCreateOrConnectWithoutNoteInput[]
    upsert?: NoteAccessUpsertWithWhereUniqueWithoutNoteInput | NoteAccessUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: NoteAccessCreateManyNoteInputEnvelope
    set?: NoteAccessWhereUniqueInput | NoteAccessWhereUniqueInput[]
    disconnect?: NoteAccessWhereUniqueInput | NoteAccessWhereUniqueInput[]
    delete?: NoteAccessWhereUniqueInput | NoteAccessWhereUniqueInput[]
    connect?: NoteAccessWhereUniqueInput | NoteAccessWhereUniqueInput[]
    update?: NoteAccessUpdateWithWhereUniqueWithoutNoteInput | NoteAccessUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: NoteAccessUpdateManyWithWhereWithoutNoteInput | NoteAccessUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: NoteAccessScalarWhereInput | NoteAccessScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTeacherRatingsInput = {
    create?: XOR<UserCreateWithoutTeacherRatingsInput, UserUncheckedCreateWithoutTeacherRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherRatingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStudentRatingsInput = {
    create?: XOR<UserCreateWithoutStudentRatingsInput, UserUncheckedCreateWithoutStudentRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentRatingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTeacherRatingsNestedInput = {
    create?: XOR<UserCreateWithoutTeacherRatingsInput, UserUncheckedCreateWithoutTeacherRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherRatingsInput
    upsert?: UserUpsertWithoutTeacherRatingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeacherRatingsInput, UserUpdateWithoutTeacherRatingsInput>, UserUncheckedUpdateWithoutTeacherRatingsInput>
  }

  export type UserUpdateOneRequiredWithoutStudentRatingsNestedInput = {
    create?: XOR<UserCreateWithoutStudentRatingsInput, UserUncheckedCreateWithoutStudentRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentRatingsInput
    upsert?: UserUpsertWithoutStudentRatingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentRatingsInput, UserUpdateWithoutStudentRatingsInput>, UserUncheckedUpdateWithoutStudentRatingsInput>
  }

  export type NoteCreateNestedOneWithoutAccessesInput = {
    create?: XOR<NoteCreateWithoutAccessesInput, NoteUncheckedCreateWithoutAccessesInput>
    connectOrCreate?: NoteCreateOrConnectWithoutAccessesInput
    connect?: NoteWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNoteAccessesInput = {
    create?: XOR<UserCreateWithoutNoteAccessesInput, UserUncheckedCreateWithoutNoteAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNoteAccessesInput
    connect?: UserWhereUniqueInput
  }

  export type NoteUpdateOneRequiredWithoutAccessesNestedInput = {
    create?: XOR<NoteCreateWithoutAccessesInput, NoteUncheckedCreateWithoutAccessesInput>
    connectOrCreate?: NoteCreateOrConnectWithoutAccessesInput
    upsert?: NoteUpsertWithoutAccessesInput
    connect?: NoteWhereUniqueInput
    update?: XOR<XOR<NoteUpdateToOneWithWhereWithoutAccessesInput, NoteUpdateWithoutAccessesInput>, NoteUncheckedUpdateWithoutAccessesInput>
  }

  export type UserUpdateOneRequiredWithoutNoteAccessesNestedInput = {
    create?: XOR<UserCreateWithoutNoteAccessesInput, UserUncheckedCreateWithoutNoteAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNoteAccessesInput
    upsert?: UserUpsertWithoutNoteAccessesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNoteAccessesInput, UserUpdateWithoutNoteAccessesInput>, UserUncheckedUpdateWithoutNoteAccessesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumQuestionOptionFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionOption | EnumQuestionOptionFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionOption[]
    notIn?: $Enums.QuestionOption[]
    not?: NestedEnumQuestionOptionFilter<$PrismaModel> | $Enums.QuestionOption
  }

  export type NestedEnumQuestionOptionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionOption | EnumQuestionOptionFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionOption[]
    notIn?: $Enums.QuestionOption[]
    not?: NestedEnumQuestionOptionWithAggregatesFilter<$PrismaModel> | $Enums.QuestionOption
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionOptionFilter<$PrismaModel>
    _max?: NestedEnumQuestionOptionFilter<$PrismaModel>
  }

  export type QuizCreateWithoutTeacherInput = {
    title: string
    description?: string | null
    timeLimit: number
    passingScore: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutQuizInput
    submissions?: QuizSubmissionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutTeacherInput = {
    id?: number
    title: string
    description?: string | null
    timeLimit: number
    passingScore: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    submissions?: QuizSubmissionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutTeacherInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutTeacherInput, QuizUncheckedCreateWithoutTeacherInput>
  }

  export type QuizCreateManyTeacherInputEnvelope = {
    data: QuizCreateManyTeacherInput | QuizCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type QuizSubmissionCreateWithoutStudentInput = {
    score: number
    timeTaken: number
    submittedAt?: Date | string
    quiz: QuizCreateNestedOneWithoutSubmissionsInput
    answers?: StudentAnswerCreateNestedManyWithoutSubmissionInput
  }

  export type QuizSubmissionUncheckedCreateWithoutStudentInput = {
    id?: number
    quizId: number
    score: number
    timeTaken: number
    submittedAt?: Date | string
    answers?: StudentAnswerUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type QuizSubmissionCreateOrConnectWithoutStudentInput = {
    where: QuizSubmissionWhereUniqueInput
    create: XOR<QuizSubmissionCreateWithoutStudentInput, QuizSubmissionUncheckedCreateWithoutStudentInput>
  }

  export type QuizSubmissionCreateManyStudentInputEnvelope = {
    data: QuizSubmissionCreateManyStudentInput | QuizSubmissionCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type TeacherRatingCreateWithoutTeacherInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    student: UserCreateNestedOneWithoutStudentRatingsInput
  }

  export type TeacherRatingUncheckedCreateWithoutTeacherInput = {
    id?: number
    studentId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type TeacherRatingCreateOrConnectWithoutTeacherInput = {
    where: TeacherRatingWhereUniqueInput
    create: XOR<TeacherRatingCreateWithoutTeacherInput, TeacherRatingUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherRatingCreateManyTeacherInputEnvelope = {
    data: TeacherRatingCreateManyTeacherInput | TeacherRatingCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type TeacherRatingCreateWithoutStudentInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    teacher: UserCreateNestedOneWithoutTeacherRatingsInput
  }

  export type TeacherRatingUncheckedCreateWithoutStudentInput = {
    id?: number
    teacherId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type TeacherRatingCreateOrConnectWithoutStudentInput = {
    where: TeacherRatingWhereUniqueInput
    create: XOR<TeacherRatingCreateWithoutStudentInput, TeacherRatingUncheckedCreateWithoutStudentInput>
  }

  export type TeacherRatingCreateManyStudentInputEnvelope = {
    data: TeacherRatingCreateManyStudentInput | TeacherRatingCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutUserInput = {
    title: string
    content: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accesses?: NoteAccessCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    content: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accesses?: NoteAccessUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutUserInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
  }

  export type NoteCreateManyUserInputEnvelope = {
    data: NoteCreateManyUserInput | NoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NoteAccessCreateWithoutStudentInput = {
    grantedAt?: Date | string
    note: NoteCreateNestedOneWithoutAccessesInput
  }

  export type NoteAccessUncheckedCreateWithoutStudentInput = {
    id?: number
    noteId: number
    grantedAt?: Date | string
  }

  export type NoteAccessCreateOrConnectWithoutStudentInput = {
    where: NoteAccessWhereUniqueInput
    create: XOR<NoteAccessCreateWithoutStudentInput, NoteAccessUncheckedCreateWithoutStudentInput>
  }

  export type NoteAccessCreateManyStudentInputEnvelope = {
    data: NoteAccessCreateManyStudentInput | NoteAccessCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type QuizUpsertWithWhereUniqueWithoutTeacherInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutTeacherInput, QuizUncheckedUpdateWithoutTeacherInput>
    create: XOR<QuizCreateWithoutTeacherInput, QuizUncheckedCreateWithoutTeacherInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutTeacherInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutTeacherInput, QuizUncheckedUpdateWithoutTeacherInput>
  }

  export type QuizUpdateManyWithWhereWithoutTeacherInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutTeacherInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    id?: IntFilter<"Quiz"> | number
    title?: StringFilter<"Quiz"> | string
    description?: StringNullableFilter<"Quiz"> | string | null
    teacherId?: IntFilter<"Quiz"> | number
    timeLimit?: IntFilter<"Quiz"> | number
    passingScore?: IntFilter<"Quiz"> | number
    isPublished?: BoolFilter<"Quiz"> | boolean
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeFilter<"Quiz"> | Date | string
  }

  export type QuizSubmissionUpsertWithWhereUniqueWithoutStudentInput = {
    where: QuizSubmissionWhereUniqueInput
    update: XOR<QuizSubmissionUpdateWithoutStudentInput, QuizSubmissionUncheckedUpdateWithoutStudentInput>
    create: XOR<QuizSubmissionCreateWithoutStudentInput, QuizSubmissionUncheckedCreateWithoutStudentInput>
  }

  export type QuizSubmissionUpdateWithWhereUniqueWithoutStudentInput = {
    where: QuizSubmissionWhereUniqueInput
    data: XOR<QuizSubmissionUpdateWithoutStudentInput, QuizSubmissionUncheckedUpdateWithoutStudentInput>
  }

  export type QuizSubmissionUpdateManyWithWhereWithoutStudentInput = {
    where: QuizSubmissionScalarWhereInput
    data: XOR<QuizSubmissionUpdateManyMutationInput, QuizSubmissionUncheckedUpdateManyWithoutStudentInput>
  }

  export type QuizSubmissionScalarWhereInput = {
    AND?: QuizSubmissionScalarWhereInput | QuizSubmissionScalarWhereInput[]
    OR?: QuizSubmissionScalarWhereInput[]
    NOT?: QuizSubmissionScalarWhereInput | QuizSubmissionScalarWhereInput[]
    id?: IntFilter<"QuizSubmission"> | number
    quizId?: IntFilter<"QuizSubmission"> | number
    studentId?: IntFilter<"QuizSubmission"> | number
    score?: IntFilter<"QuizSubmission"> | number
    timeTaken?: IntFilter<"QuizSubmission"> | number
    submittedAt?: DateTimeFilter<"QuizSubmission"> | Date | string
  }

  export type TeacherRatingUpsertWithWhereUniqueWithoutTeacherInput = {
    where: TeacherRatingWhereUniqueInput
    update: XOR<TeacherRatingUpdateWithoutTeacherInput, TeacherRatingUncheckedUpdateWithoutTeacherInput>
    create: XOR<TeacherRatingCreateWithoutTeacherInput, TeacherRatingUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherRatingUpdateWithWhereUniqueWithoutTeacherInput = {
    where: TeacherRatingWhereUniqueInput
    data: XOR<TeacherRatingUpdateWithoutTeacherInput, TeacherRatingUncheckedUpdateWithoutTeacherInput>
  }

  export type TeacherRatingUpdateManyWithWhereWithoutTeacherInput = {
    where: TeacherRatingScalarWhereInput
    data: XOR<TeacherRatingUpdateManyMutationInput, TeacherRatingUncheckedUpdateManyWithoutTeacherInput>
  }

  export type TeacherRatingScalarWhereInput = {
    AND?: TeacherRatingScalarWhereInput | TeacherRatingScalarWhereInput[]
    OR?: TeacherRatingScalarWhereInput[]
    NOT?: TeacherRatingScalarWhereInput | TeacherRatingScalarWhereInput[]
    id?: IntFilter<"TeacherRating"> | number
    teacherId?: IntFilter<"TeacherRating"> | number
    studentId?: IntFilter<"TeacherRating"> | number
    rating?: IntFilter<"TeacherRating"> | number
    comment?: StringNullableFilter<"TeacherRating"> | string | null
    createdAt?: DateTimeFilter<"TeacherRating"> | Date | string
  }

  export type TeacherRatingUpsertWithWhereUniqueWithoutStudentInput = {
    where: TeacherRatingWhereUniqueInput
    update: XOR<TeacherRatingUpdateWithoutStudentInput, TeacherRatingUncheckedUpdateWithoutStudentInput>
    create: XOR<TeacherRatingCreateWithoutStudentInput, TeacherRatingUncheckedCreateWithoutStudentInput>
  }

  export type TeacherRatingUpdateWithWhereUniqueWithoutStudentInput = {
    where: TeacherRatingWhereUniqueInput
    data: XOR<TeacherRatingUpdateWithoutStudentInput, TeacherRatingUncheckedUpdateWithoutStudentInput>
  }

  export type TeacherRatingUpdateManyWithWhereWithoutStudentInput = {
    where: TeacherRatingScalarWhereInput
    data: XOR<TeacherRatingUpdateManyMutationInput, TeacherRatingUncheckedUpdateManyWithoutStudentInput>
  }

  export type NoteUpsertWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutUserInput, NoteUncheckedUpdateWithoutUserInput>
    create: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutUserInput, NoteUncheckedUpdateWithoutUserInput>
  }

  export type NoteUpdateManyWithWhereWithoutUserInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutUserInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    id?: IntFilter<"Note"> | number
    title?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    userId?: IntFilter<"Note"> | number
    isPublic?: BoolFilter<"Note"> | boolean
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
  }

  export type NoteAccessUpsertWithWhereUniqueWithoutStudentInput = {
    where: NoteAccessWhereUniqueInput
    update: XOR<NoteAccessUpdateWithoutStudentInput, NoteAccessUncheckedUpdateWithoutStudentInput>
    create: XOR<NoteAccessCreateWithoutStudentInput, NoteAccessUncheckedCreateWithoutStudentInput>
  }

  export type NoteAccessUpdateWithWhereUniqueWithoutStudentInput = {
    where: NoteAccessWhereUniqueInput
    data: XOR<NoteAccessUpdateWithoutStudentInput, NoteAccessUncheckedUpdateWithoutStudentInput>
  }

  export type NoteAccessUpdateManyWithWhereWithoutStudentInput = {
    where: NoteAccessScalarWhereInput
    data: XOR<NoteAccessUpdateManyMutationInput, NoteAccessUncheckedUpdateManyWithoutStudentInput>
  }

  export type NoteAccessScalarWhereInput = {
    AND?: NoteAccessScalarWhereInput | NoteAccessScalarWhereInput[]
    OR?: NoteAccessScalarWhereInput[]
    NOT?: NoteAccessScalarWhereInput | NoteAccessScalarWhereInput[]
    id?: IntFilter<"NoteAccess"> | number
    noteId?: IntFilter<"NoteAccess"> | number
    studentId?: IntFilter<"NoteAccess"> | number
    grantedAt?: DateTimeFilter<"NoteAccess"> | Date | string
  }

  export type UserCreateWithoutQuizzesInput = {
    username: string
    email: string
    password: string
    role: $Enums.Role
    firstName?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quizSubmissions?: QuizSubmissionCreateNestedManyWithoutStudentInput
    teacherRatings?: TeacherRatingCreateNestedManyWithoutTeacherInput
    studentRatings?: TeacherRatingCreateNestedManyWithoutStudentInput
    notes?: NoteCreateNestedManyWithoutUserInput
    noteAccesses?: NoteAccessCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutQuizzesInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.Role
    firstName?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quizSubmissions?: QuizSubmissionUncheckedCreateNestedManyWithoutStudentInput
    teacherRatings?: TeacherRatingUncheckedCreateNestedManyWithoutTeacherInput
    studentRatings?: TeacherRatingUncheckedCreateNestedManyWithoutStudentInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    noteAccesses?: NoteAccessUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutQuizzesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuizzesInput, UserUncheckedCreateWithoutQuizzesInput>
  }

  export type QuestionCreateWithoutQuizInput = {
    text: string
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: $Enums.QuestionOption
    createdAt?: Date | string
    answers?: StudentAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutQuizInput = {
    id?: number
    text: string
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: $Enums.QuestionOption
    createdAt?: Date | string
    answers?: StudentAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionCreateManyQuizInputEnvelope = {
    data: QuestionCreateManyQuizInput | QuestionCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type QuizSubmissionCreateWithoutQuizInput = {
    score: number
    timeTaken: number
    submittedAt?: Date | string
    student: UserCreateNestedOneWithoutQuizSubmissionsInput
    answers?: StudentAnswerCreateNestedManyWithoutSubmissionInput
  }

  export type QuizSubmissionUncheckedCreateWithoutQuizInput = {
    id?: number
    studentId: number
    score: number
    timeTaken: number
    submittedAt?: Date | string
    answers?: StudentAnswerUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type QuizSubmissionCreateOrConnectWithoutQuizInput = {
    where: QuizSubmissionWhereUniqueInput
    create: XOR<QuizSubmissionCreateWithoutQuizInput, QuizSubmissionUncheckedCreateWithoutQuizInput>
  }

  export type QuizSubmissionCreateManyQuizInputEnvelope = {
    data: QuizSubmissionCreateManyQuizInput | QuizSubmissionCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutQuizzesInput = {
    update: XOR<UserUpdateWithoutQuizzesInput, UserUncheckedUpdateWithoutQuizzesInput>
    create: XOR<UserCreateWithoutQuizzesInput, UserUncheckedCreateWithoutQuizzesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuizzesInput, UserUncheckedUpdateWithoutQuizzesInput>
  }

  export type UserUpdateWithoutQuizzesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizSubmissions?: QuizSubmissionUpdateManyWithoutStudentNestedInput
    teacherRatings?: TeacherRatingUpdateManyWithoutTeacherNestedInput
    studentRatings?: TeacherRatingUpdateManyWithoutStudentNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    noteAccesses?: NoteAccessUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutQuizzesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizSubmissions?: QuizSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    teacherRatings?: TeacherRatingUncheckedUpdateManyWithoutTeacherNestedInput
    studentRatings?: TeacherRatingUncheckedUpdateManyWithoutStudentNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    noteAccesses?: NoteAccessUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type QuestionUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
  }

  export type QuestionUpdateManyWithWhereWithoutQuizInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: IntFilter<"Question"> | number
    quizId?: IntFilter<"Question"> | number
    text?: StringFilter<"Question"> | string
    optionA?: StringFilter<"Question"> | string
    optionB?: StringFilter<"Question"> | string
    optionC?: StringFilter<"Question"> | string
    optionD?: StringFilter<"Question"> | string
    correctOption?: EnumQuestionOptionFilter<"Question"> | $Enums.QuestionOption
    createdAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type QuizSubmissionUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuizSubmissionWhereUniqueInput
    update: XOR<QuizSubmissionUpdateWithoutQuizInput, QuizSubmissionUncheckedUpdateWithoutQuizInput>
    create: XOR<QuizSubmissionCreateWithoutQuizInput, QuizSubmissionUncheckedCreateWithoutQuizInput>
  }

  export type QuizSubmissionUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuizSubmissionWhereUniqueInput
    data: XOR<QuizSubmissionUpdateWithoutQuizInput, QuizSubmissionUncheckedUpdateWithoutQuizInput>
  }

  export type QuizSubmissionUpdateManyWithWhereWithoutQuizInput = {
    where: QuizSubmissionScalarWhereInput
    data: XOR<QuizSubmissionUpdateManyMutationInput, QuizSubmissionUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuizCreateWithoutQuestionsInput = {
    title: string
    description?: string | null
    timeLimit: number
    passingScore: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutQuizzesInput
    submissions?: QuizSubmissionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutQuestionsInput = {
    id?: number
    title: string
    description?: string | null
    teacherId: number
    timeLimit: number
    passingScore: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: QuizSubmissionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutQuestionsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
  }

  export type StudentAnswerCreateWithoutQuestionInput = {
    selectedOption: $Enums.QuestionOption
    submission: QuizSubmissionCreateNestedOneWithoutAnswersInput
  }

  export type StudentAnswerUncheckedCreateWithoutQuestionInput = {
    id?: number
    submissionId: number
    selectedOption: $Enums.QuestionOption
  }

  export type StudentAnswerCreateOrConnectWithoutQuestionInput = {
    where: StudentAnswerWhereUniqueInput
    create: XOR<StudentAnswerCreateWithoutQuestionInput, StudentAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type StudentAnswerCreateManyQuestionInputEnvelope = {
    data: StudentAnswerCreateManyQuestionInput | StudentAnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuizUpsertWithoutQuestionsInput = {
    update: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuizUpdateWithoutQuestionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutQuizzesNestedInput
    submissions?: QuizSubmissionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: QuizSubmissionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type StudentAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: StudentAnswerWhereUniqueInput
    update: XOR<StudentAnswerUpdateWithoutQuestionInput, StudentAnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<StudentAnswerCreateWithoutQuestionInput, StudentAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type StudentAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: StudentAnswerWhereUniqueInput
    data: XOR<StudentAnswerUpdateWithoutQuestionInput, StudentAnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type StudentAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: StudentAnswerScalarWhereInput
    data: XOR<StudentAnswerUpdateManyMutationInput, StudentAnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type StudentAnswerScalarWhereInput = {
    AND?: StudentAnswerScalarWhereInput | StudentAnswerScalarWhereInput[]
    OR?: StudentAnswerScalarWhereInput[]
    NOT?: StudentAnswerScalarWhereInput | StudentAnswerScalarWhereInput[]
    id?: IntFilter<"StudentAnswer"> | number
    submissionId?: IntFilter<"StudentAnswer"> | number
    questionId?: IntFilter<"StudentAnswer"> | number
    selectedOption?: EnumQuestionOptionFilter<"StudentAnswer"> | $Enums.QuestionOption
  }

  export type QuizCreateWithoutSubmissionsInput = {
    title: string
    description?: string | null
    timeLimit: number
    passingScore: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutQuizzesInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutSubmissionsInput = {
    id?: number
    title: string
    description?: string | null
    teacherId: number
    timeLimit: number
    passingScore: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutSubmissionsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutSubmissionsInput, QuizUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserCreateWithoutQuizSubmissionsInput = {
    username: string
    email: string
    password: string
    role: $Enums.Role
    firstName?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizCreateNestedManyWithoutTeacherInput
    teacherRatings?: TeacherRatingCreateNestedManyWithoutTeacherInput
    studentRatings?: TeacherRatingCreateNestedManyWithoutStudentInput
    notes?: NoteCreateNestedManyWithoutUserInput
    noteAccesses?: NoteAccessCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutQuizSubmissionsInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.Role
    firstName?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizUncheckedCreateNestedManyWithoutTeacherInput
    teacherRatings?: TeacherRatingUncheckedCreateNestedManyWithoutTeacherInput
    studentRatings?: TeacherRatingUncheckedCreateNestedManyWithoutStudentInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    noteAccesses?: NoteAccessUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutQuizSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuizSubmissionsInput, UserUncheckedCreateWithoutQuizSubmissionsInput>
  }

  export type StudentAnswerCreateWithoutSubmissionInput = {
    selectedOption: $Enums.QuestionOption
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type StudentAnswerUncheckedCreateWithoutSubmissionInput = {
    id?: number
    questionId: number
    selectedOption: $Enums.QuestionOption
  }

  export type StudentAnswerCreateOrConnectWithoutSubmissionInput = {
    where: StudentAnswerWhereUniqueInput
    create: XOR<StudentAnswerCreateWithoutSubmissionInput, StudentAnswerUncheckedCreateWithoutSubmissionInput>
  }

  export type StudentAnswerCreateManySubmissionInputEnvelope = {
    data: StudentAnswerCreateManySubmissionInput | StudentAnswerCreateManySubmissionInput[]
    skipDuplicates?: boolean
  }

  export type QuizUpsertWithoutSubmissionsInput = {
    update: XOR<QuizUpdateWithoutSubmissionsInput, QuizUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<QuizCreateWithoutSubmissionsInput, QuizUncheckedCreateWithoutSubmissionsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutSubmissionsInput, QuizUncheckedUpdateWithoutSubmissionsInput>
  }

  export type QuizUpdateWithoutSubmissionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutQuizzesNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutSubmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type UserUpsertWithoutQuizSubmissionsInput = {
    update: XOR<UserUpdateWithoutQuizSubmissionsInput, UserUncheckedUpdateWithoutQuizSubmissionsInput>
    create: XOR<UserCreateWithoutQuizSubmissionsInput, UserUncheckedCreateWithoutQuizSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuizSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuizSubmissionsInput, UserUncheckedUpdateWithoutQuizSubmissionsInput>
  }

  export type UserUpdateWithoutQuizSubmissionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUpdateManyWithoutTeacherNestedInput
    teacherRatings?: TeacherRatingUpdateManyWithoutTeacherNestedInput
    studentRatings?: TeacherRatingUpdateManyWithoutStudentNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    noteAccesses?: NoteAccessUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutQuizSubmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUncheckedUpdateManyWithoutTeacherNestedInput
    teacherRatings?: TeacherRatingUncheckedUpdateManyWithoutTeacherNestedInput
    studentRatings?: TeacherRatingUncheckedUpdateManyWithoutStudentNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    noteAccesses?: NoteAccessUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentAnswerUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: StudentAnswerWhereUniqueInput
    update: XOR<StudentAnswerUpdateWithoutSubmissionInput, StudentAnswerUncheckedUpdateWithoutSubmissionInput>
    create: XOR<StudentAnswerCreateWithoutSubmissionInput, StudentAnswerUncheckedCreateWithoutSubmissionInput>
  }

  export type StudentAnswerUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: StudentAnswerWhereUniqueInput
    data: XOR<StudentAnswerUpdateWithoutSubmissionInput, StudentAnswerUncheckedUpdateWithoutSubmissionInput>
  }

  export type StudentAnswerUpdateManyWithWhereWithoutSubmissionInput = {
    where: StudentAnswerScalarWhereInput
    data: XOR<StudentAnswerUpdateManyMutationInput, StudentAnswerUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type QuizSubmissionCreateWithoutAnswersInput = {
    score: number
    timeTaken: number
    submittedAt?: Date | string
    quiz: QuizCreateNestedOneWithoutSubmissionsInput
    student: UserCreateNestedOneWithoutQuizSubmissionsInput
  }

  export type QuizSubmissionUncheckedCreateWithoutAnswersInput = {
    id?: number
    quizId: number
    studentId: number
    score: number
    timeTaken: number
    submittedAt?: Date | string
  }

  export type QuizSubmissionCreateOrConnectWithoutAnswersInput = {
    where: QuizSubmissionWhereUniqueInput
    create: XOR<QuizSubmissionCreateWithoutAnswersInput, QuizSubmissionUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionCreateWithoutAnswersInput = {
    text: string
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: $Enums.QuestionOption
    createdAt?: Date | string
    quiz: QuizCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: number
    quizId: number
    text: string
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: $Enums.QuestionOption
    createdAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type QuizSubmissionUpsertWithoutAnswersInput = {
    update: XOR<QuizSubmissionUpdateWithoutAnswersInput, QuizSubmissionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuizSubmissionCreateWithoutAnswersInput, QuizSubmissionUncheckedCreateWithoutAnswersInput>
    where?: QuizSubmissionWhereInput
  }

  export type QuizSubmissionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuizSubmissionWhereInput
    data: XOR<QuizSubmissionUpdateWithoutAnswersInput, QuizSubmissionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuizSubmissionUpdateWithoutAnswersInput = {
    score?: IntFieldUpdateOperationsInput | number
    timeTaken?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutSubmissionsNestedInput
    student?: UserUpdateOneRequiredWithoutQuizSubmissionsNestedInput
  }

  export type QuizSubmissionUncheckedUpdateWithoutAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    timeTaken?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    text?: StringFieldUpdateOperationsInput | string
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: EnumQuestionOptionFieldUpdateOperationsInput | $Enums.QuestionOption
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: EnumQuestionOptionFieldUpdateOperationsInput | $Enums.QuestionOption
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutNotesInput = {
    username: string
    email: string
    password: string
    role: $Enums.Role
    firstName?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizCreateNestedManyWithoutTeacherInput
    quizSubmissions?: QuizSubmissionCreateNestedManyWithoutStudentInput
    teacherRatings?: TeacherRatingCreateNestedManyWithoutTeacherInput
    studentRatings?: TeacherRatingCreateNestedManyWithoutStudentInput
    noteAccesses?: NoteAccessCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutNotesInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.Role
    firstName?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizUncheckedCreateNestedManyWithoutTeacherInput
    quizSubmissions?: QuizSubmissionUncheckedCreateNestedManyWithoutStudentInput
    teacherRatings?: TeacherRatingUncheckedCreateNestedManyWithoutTeacherInput
    studentRatings?: TeacherRatingUncheckedCreateNestedManyWithoutStudentInput
    noteAccesses?: NoteAccessUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
  }

  export type NoteAccessCreateWithoutNoteInput = {
    grantedAt?: Date | string
    student: UserCreateNestedOneWithoutNoteAccessesInput
  }

  export type NoteAccessUncheckedCreateWithoutNoteInput = {
    id?: number
    studentId: number
    grantedAt?: Date | string
  }

  export type NoteAccessCreateOrConnectWithoutNoteInput = {
    where: NoteAccessWhereUniqueInput
    create: XOR<NoteAccessCreateWithoutNoteInput, NoteAccessUncheckedCreateWithoutNoteInput>
  }

  export type NoteAccessCreateManyNoteInputEnvelope = {
    data: NoteAccessCreateManyNoteInput | NoteAccessCreateManyNoteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutNotesInput = {
    update: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateWithoutNotesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUpdateManyWithoutTeacherNestedInput
    quizSubmissions?: QuizSubmissionUpdateManyWithoutStudentNestedInput
    teacherRatings?: TeacherRatingUpdateManyWithoutTeacherNestedInput
    studentRatings?: TeacherRatingUpdateManyWithoutStudentNestedInput
    noteAccesses?: NoteAccessUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUncheckedUpdateManyWithoutTeacherNestedInput
    quizSubmissions?: QuizSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    teacherRatings?: TeacherRatingUncheckedUpdateManyWithoutTeacherNestedInput
    studentRatings?: TeacherRatingUncheckedUpdateManyWithoutStudentNestedInput
    noteAccesses?: NoteAccessUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type NoteAccessUpsertWithWhereUniqueWithoutNoteInput = {
    where: NoteAccessWhereUniqueInput
    update: XOR<NoteAccessUpdateWithoutNoteInput, NoteAccessUncheckedUpdateWithoutNoteInput>
    create: XOR<NoteAccessCreateWithoutNoteInput, NoteAccessUncheckedCreateWithoutNoteInput>
  }

  export type NoteAccessUpdateWithWhereUniqueWithoutNoteInput = {
    where: NoteAccessWhereUniqueInput
    data: XOR<NoteAccessUpdateWithoutNoteInput, NoteAccessUncheckedUpdateWithoutNoteInput>
  }

  export type NoteAccessUpdateManyWithWhereWithoutNoteInput = {
    where: NoteAccessScalarWhereInput
    data: XOR<NoteAccessUpdateManyMutationInput, NoteAccessUncheckedUpdateManyWithoutNoteInput>
  }

  export type UserCreateWithoutTeacherRatingsInput = {
    username: string
    email: string
    password: string
    role: $Enums.Role
    firstName?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizCreateNestedManyWithoutTeacherInput
    quizSubmissions?: QuizSubmissionCreateNestedManyWithoutStudentInput
    studentRatings?: TeacherRatingCreateNestedManyWithoutStudentInput
    notes?: NoteCreateNestedManyWithoutUserInput
    noteAccesses?: NoteAccessCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutTeacherRatingsInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.Role
    firstName?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizUncheckedCreateNestedManyWithoutTeacherInput
    quizSubmissions?: QuizSubmissionUncheckedCreateNestedManyWithoutStudentInput
    studentRatings?: TeacherRatingUncheckedCreateNestedManyWithoutStudentInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    noteAccesses?: NoteAccessUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutTeacherRatingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeacherRatingsInput, UserUncheckedCreateWithoutTeacherRatingsInput>
  }

  export type UserCreateWithoutStudentRatingsInput = {
    username: string
    email: string
    password: string
    role: $Enums.Role
    firstName?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizCreateNestedManyWithoutTeacherInput
    quizSubmissions?: QuizSubmissionCreateNestedManyWithoutStudentInput
    teacherRatings?: TeacherRatingCreateNestedManyWithoutTeacherInput
    notes?: NoteCreateNestedManyWithoutUserInput
    noteAccesses?: NoteAccessCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutStudentRatingsInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.Role
    firstName?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizUncheckedCreateNestedManyWithoutTeacherInput
    quizSubmissions?: QuizSubmissionUncheckedCreateNestedManyWithoutStudentInput
    teacherRatings?: TeacherRatingUncheckedCreateNestedManyWithoutTeacherInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    noteAccesses?: NoteAccessUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutStudentRatingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentRatingsInput, UserUncheckedCreateWithoutStudentRatingsInput>
  }

  export type UserUpsertWithoutTeacherRatingsInput = {
    update: XOR<UserUpdateWithoutTeacherRatingsInput, UserUncheckedUpdateWithoutTeacherRatingsInput>
    create: XOR<UserCreateWithoutTeacherRatingsInput, UserUncheckedCreateWithoutTeacherRatingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeacherRatingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeacherRatingsInput, UserUncheckedUpdateWithoutTeacherRatingsInput>
  }

  export type UserUpdateWithoutTeacherRatingsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUpdateManyWithoutTeacherNestedInput
    quizSubmissions?: QuizSubmissionUpdateManyWithoutStudentNestedInput
    studentRatings?: TeacherRatingUpdateManyWithoutStudentNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    noteAccesses?: NoteAccessUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutTeacherRatingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUncheckedUpdateManyWithoutTeacherNestedInput
    quizSubmissions?: QuizSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    studentRatings?: TeacherRatingUncheckedUpdateManyWithoutStudentNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    noteAccesses?: NoteAccessUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserUpsertWithoutStudentRatingsInput = {
    update: XOR<UserUpdateWithoutStudentRatingsInput, UserUncheckedUpdateWithoutStudentRatingsInput>
    create: XOR<UserCreateWithoutStudentRatingsInput, UserUncheckedCreateWithoutStudentRatingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentRatingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentRatingsInput, UserUncheckedUpdateWithoutStudentRatingsInput>
  }

  export type UserUpdateWithoutStudentRatingsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUpdateManyWithoutTeacherNestedInput
    quizSubmissions?: QuizSubmissionUpdateManyWithoutStudentNestedInput
    teacherRatings?: TeacherRatingUpdateManyWithoutTeacherNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    noteAccesses?: NoteAccessUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentRatingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUncheckedUpdateManyWithoutTeacherNestedInput
    quizSubmissions?: QuizSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    teacherRatings?: TeacherRatingUncheckedUpdateManyWithoutTeacherNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    noteAccesses?: NoteAccessUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type NoteCreateWithoutAccessesInput = {
    title: string
    content: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutAccessesInput = {
    id?: number
    title: string
    content: string
    userId: number
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteCreateOrConnectWithoutAccessesInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutAccessesInput, NoteUncheckedCreateWithoutAccessesInput>
  }

  export type UserCreateWithoutNoteAccessesInput = {
    username: string
    email: string
    password: string
    role: $Enums.Role
    firstName?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizCreateNestedManyWithoutTeacherInput
    quizSubmissions?: QuizSubmissionCreateNestedManyWithoutStudentInput
    teacherRatings?: TeacherRatingCreateNestedManyWithoutTeacherInput
    studentRatings?: TeacherRatingCreateNestedManyWithoutStudentInput
    notes?: NoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNoteAccessesInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.Role
    firstName?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizUncheckedCreateNestedManyWithoutTeacherInput
    quizSubmissions?: QuizSubmissionUncheckedCreateNestedManyWithoutStudentInput
    teacherRatings?: TeacherRatingUncheckedCreateNestedManyWithoutTeacherInput
    studentRatings?: TeacherRatingUncheckedCreateNestedManyWithoutStudentInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNoteAccessesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNoteAccessesInput, UserUncheckedCreateWithoutNoteAccessesInput>
  }

  export type NoteUpsertWithoutAccessesInput = {
    update: XOR<NoteUpdateWithoutAccessesInput, NoteUncheckedUpdateWithoutAccessesInput>
    create: XOR<NoteCreateWithoutAccessesInput, NoteUncheckedCreateWithoutAccessesInput>
    where?: NoteWhereInput
  }

  export type NoteUpdateToOneWithWhereWithoutAccessesInput = {
    where?: NoteWhereInput
    data: XOR<NoteUpdateWithoutAccessesInput, NoteUncheckedUpdateWithoutAccessesInput>
  }

  export type NoteUpdateWithoutAccessesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutAccessesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutNoteAccessesInput = {
    update: XOR<UserUpdateWithoutNoteAccessesInput, UserUncheckedUpdateWithoutNoteAccessesInput>
    create: XOR<UserCreateWithoutNoteAccessesInput, UserUncheckedCreateWithoutNoteAccessesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNoteAccessesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNoteAccessesInput, UserUncheckedUpdateWithoutNoteAccessesInput>
  }

  export type UserUpdateWithoutNoteAccessesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUpdateManyWithoutTeacherNestedInput
    quizSubmissions?: QuizSubmissionUpdateManyWithoutStudentNestedInput
    teacherRatings?: TeacherRatingUpdateManyWithoutTeacherNestedInput
    studentRatings?: TeacherRatingUpdateManyWithoutStudentNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNoteAccessesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUncheckedUpdateManyWithoutTeacherNestedInput
    quizSubmissions?: QuizSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    teacherRatings?: TeacherRatingUncheckedUpdateManyWithoutTeacherNestedInput
    studentRatings?: TeacherRatingUncheckedUpdateManyWithoutStudentNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuizCreateManyTeacherInput = {
    id?: number
    title: string
    description?: string | null
    timeLimit: number
    passingScore: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizSubmissionCreateManyStudentInput = {
    id?: number
    quizId: number
    score: number
    timeTaken: number
    submittedAt?: Date | string
  }

  export type TeacherRatingCreateManyTeacherInput = {
    id?: number
    studentId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type TeacherRatingCreateManyStudentInput = {
    id?: number
    teacherId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type NoteCreateManyUserInput = {
    id?: number
    title: string
    content: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteAccessCreateManyStudentInput = {
    id?: number
    noteId: number
    grantedAt?: Date | string
  }

  export type QuizUpdateWithoutTeacherInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutQuizNestedInput
    submissions?: QuizSubmissionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    submissions?: QuizSubmissionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizSubmissionUpdateWithoutStudentInput = {
    score?: IntFieldUpdateOperationsInput | number
    timeTaken?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutSubmissionsNestedInput
    answers?: StudentAnswerUpdateManyWithoutSubmissionNestedInput
  }

  export type QuizSubmissionUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    timeTaken?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: StudentAnswerUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type QuizSubmissionUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    timeTaken?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherRatingUpdateWithoutTeacherInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutStudentRatingsNestedInput
  }

  export type TeacherRatingUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherRatingUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherRatingUpdateWithoutStudentInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutTeacherRatingsNestedInput
  }

  export type TeacherRatingUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherRatingUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accesses?: NoteAccessUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accesses?: NoteAccessUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteAccessUpdateWithoutStudentInput = {
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NoteUpdateOneRequiredWithoutAccessesNestedInput
  }

  export type NoteAccessUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    noteId?: IntFieldUpdateOperationsInput | number
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteAccessUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    noteId?: IntFieldUpdateOperationsInput | number
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyQuizInput = {
    id?: number
    text: string
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctOption: $Enums.QuestionOption
    createdAt?: Date | string
  }

  export type QuizSubmissionCreateManyQuizInput = {
    id?: number
    studentId: number
    score: number
    timeTaken: number
    submittedAt?: Date | string
  }

  export type QuestionUpdateWithoutQuizInput = {
    text?: StringFieldUpdateOperationsInput | string
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: EnumQuestionOptionFieldUpdateOperationsInput | $Enums.QuestionOption
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: StudentAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: EnumQuestionOptionFieldUpdateOperationsInput | $Enums.QuestionOption
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: StudentAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctOption?: EnumQuestionOptionFieldUpdateOperationsInput | $Enums.QuestionOption
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizSubmissionUpdateWithoutQuizInput = {
    score?: IntFieldUpdateOperationsInput | number
    timeTaken?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutQuizSubmissionsNestedInput
    answers?: StudentAnswerUpdateManyWithoutSubmissionNestedInput
  }

  export type QuizSubmissionUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    timeTaken?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: StudentAnswerUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type QuizSubmissionUncheckedUpdateManyWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    timeTaken?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAnswerCreateManyQuestionInput = {
    id?: number
    submissionId: number
    selectedOption: $Enums.QuestionOption
  }

  export type StudentAnswerUpdateWithoutQuestionInput = {
    selectedOption?: EnumQuestionOptionFieldUpdateOperationsInput | $Enums.QuestionOption
    submission?: QuizSubmissionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type StudentAnswerUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    submissionId?: IntFieldUpdateOperationsInput | number
    selectedOption?: EnumQuestionOptionFieldUpdateOperationsInput | $Enums.QuestionOption
  }

  export type StudentAnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    submissionId?: IntFieldUpdateOperationsInput | number
    selectedOption?: EnumQuestionOptionFieldUpdateOperationsInput | $Enums.QuestionOption
  }

  export type StudentAnswerCreateManySubmissionInput = {
    id?: number
    questionId: number
    selectedOption: $Enums.QuestionOption
  }

  export type StudentAnswerUpdateWithoutSubmissionInput = {
    selectedOption?: EnumQuestionOptionFieldUpdateOperationsInput | $Enums.QuestionOption
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type StudentAnswerUncheckedUpdateWithoutSubmissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    selectedOption?: EnumQuestionOptionFieldUpdateOperationsInput | $Enums.QuestionOption
  }

  export type StudentAnswerUncheckedUpdateManyWithoutSubmissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    selectedOption?: EnumQuestionOptionFieldUpdateOperationsInput | $Enums.QuestionOption
  }

  export type NoteAccessCreateManyNoteInput = {
    id?: number
    studentId: number
    grantedAt?: Date | string
  }

  export type NoteAccessUpdateWithoutNoteInput = {
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutNoteAccessesNestedInput
  }

  export type NoteAccessUncheckedUpdateWithoutNoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteAccessUncheckedUpdateManyWithoutNoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}