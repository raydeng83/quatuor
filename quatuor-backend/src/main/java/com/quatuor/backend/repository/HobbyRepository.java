package com.quatuor.backend.repository;

import com.quatuor.backend.domain.Hobby;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by lede on 8/12/16.
 */

@Repository
public interface HobbyRepository extends CrudRepository<Hobby, Long>{
    Hobby save(Hobby hobby);
}
