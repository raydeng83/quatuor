package com.quatuor.backend.controller;

import com.quatuor.backend.domain.User;
import com.quatuor.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by lede on 8/12/16.
 */

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/user/register", method = RequestMethod.POST)
    public User registerGet(@RequestBody User user) {
        return userService.registerUser(user);
    }
}
