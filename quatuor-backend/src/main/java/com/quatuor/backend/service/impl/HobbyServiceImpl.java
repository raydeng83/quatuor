package com.quatuor.backend.service.impl;

import com.quatuor.backend.domain.Hobby;
import com.quatuor.backend.repository.HobbyRepository;
import com.quatuor.backend.service.HobbyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by lede on 8/12/16.
 */

@Service
public class HobbyServiceImpl implements HobbyService{

    @Autowired
    private HobbyRepository hobbyRepository;

    public Hobby addHobby(Hobby hobby) {
        return hobbyRepository.save(hobby);
    }
}
