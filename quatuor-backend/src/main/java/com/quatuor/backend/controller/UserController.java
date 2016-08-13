package com.quatuor.backend.controller;

import com.quatuor.backend.domain.Hobby;
import com.quatuor.backend.domain.User;
import com.quatuor.backend.service.HobbyService;
import com.quatuor.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

/**
 * Created by lede on 8/12/16.
 */

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private HobbyService hobbyService;

    @RequestMapping(value = "/user/register", method = RequestMethod.POST)
    public User registerGet(@RequestBody User user) {
        userService.registerUser(user);

        user = userService.findByEmail(user.getEmail());

        Set<String> hobbies = user.getHobbies();

        for (String hobbyName : hobbies) {
            hobbyService.addHobby(new Hobby(hobbyName, user.getUserId()));
        }

        return user;
    }

    @RequestMapping(value = "/user/username", method = RequestMethod.POST)
    public User findUserByUsername(@RequestBody String username) {
        return userService.findByUsername(username);
    }

    @RequestMapping(value = "/user/email", method = RequestMethod.POST)
    public User findByEmail(@RequestBody String email) {
        return userService.findByEmail(email);
    }


}
