package com.projeto.escola.entity.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
	
	private Long id;
	
	@NotNull
    @NotEmpty
	private String email;
	
	@NotNull
    @NotEmpty
	private String senha;

}
