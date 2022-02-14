import { Connection, SelectQueryBuilder } from 'typeorm';
import { User } from '../entity/user';
import { EventRequestParams } from '../model/eventRequestParams';

export const findUsers = async (connection: Connection, params: EventRequestParams) => {
    const query = buildUserQuery(connection, params);
    try {
        const users = await query.getMany();
        return users;
    } catch (error) {
        console.error("An error occurred trying to lookup users", error);
        throw error;
    }
}

const buildUserQuery = (connection: Connection, params: EventRequestParams): SelectQueryBuilder<User> => {
    const userRepository = connection.getRepository(User);
    const builder = userRepository.createQueryBuilder('user').innerJoinAndSelect('user.events', 'user_event');

    if (params.includeCategories) {
        const categories = params.includeCategories.split(',');
        builder.andWhere("user.id IN (SELECT userId FROM user_event WHERE category IN (:categoriesToInclude))", {categoriesToInclude: categories});
    }

    if (params.excludeCategories) {
        const categories = params.excludeCategories.split(',');
        builder.andWhere("user.id NOT IN ( SELECT userId FROM user_event WHERE category IN (:categoriesToExclude))", {categoriesToExclude: categories});
    }

    if (params.includeCodes) {
        const codes = params.includeCodes.split(',');
        builder.andWhere("userr.id IN (SELECT userId FROM user_event WHERE eventCodeEventCodeId IN (:codesToInclude))", {codesToInclude: codes});
    }

    if (params.excludeCodes) {
        const codes = params.excludeCodes.split(',');
        builder.andWhere("user.id NOT IN (SELECT userId FROM user_event WHERE eventCodeEventCodeId IN (:codesToExclude))", {codesToExclude: codes});
    }

    return builder;
}
