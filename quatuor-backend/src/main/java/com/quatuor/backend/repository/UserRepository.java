package com.quatuor.backend.repository;

import com.quatuor.backend.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by lede on 8/12/16.
 */

@Repository
public interface UserRepository extends CrudRepository<User, Long>{
    User save(User user);
}
