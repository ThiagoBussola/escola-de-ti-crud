package com.projeto.escola.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.escola.common.exception.RegistroNotFoundException;
import com.projeto.escola.entity.dto.UserDto;
import com.projeto.escola.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserEndPoint {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/new")
	@ResponseStatus(HttpStatus.CREATED)
	public UserDto save(@RequestBody @Valid UserDto userDto) {
		return userService.save(userDto);
	}
	
	@PostMapping()
	public Boolean findUser(@RequestBody @Valid UserDto user)throws RegistroNotFoundException {
		return userService.findUser(user);
	}

}
