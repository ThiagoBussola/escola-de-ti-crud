package com.projeto.escola.service;

import java.util.Objects;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projeto.escola.entity.User;
import com.projeto.escola.entity.dto.UserDto;
import com.projeto.escola.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
    private ModelMapper modelMapper;
	
	public UserDto save(UserDto userDto) {
		User user = toModel(userDto);
		return toDto(userRepository.save(user));
	}
	
	public Boolean findUser(UserDto userDto) {
		User user = userRepository.findByEmail(userDto.getEmail());
		if (Objects.equals(userDto.getSenha(), user.getSenha())) {
			return true;
		}
		return false;
	}
	
	public User toModel(UserDto userDto) {
        return modelMapper.map(userDto, User.class);
    }

    public UserDto toDto(User user) {
        return modelMapper.map(user, UserDto.class);
    }


}
