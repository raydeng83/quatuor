package com.quatuor.backend.service;

import com.quatuor.backend.domain.User;

/**
 * Created by lede on 8/12/16.
 */
public interface UserService {
    User registerUser (User user);

    User findByEmail (String email);
}
