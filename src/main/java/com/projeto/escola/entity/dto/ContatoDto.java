package com.projeto.escola.entity.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ContatoDto {
	
	private Long id;
	
    @NotEmpty
    @NotNull
    @Email	
	private String email;
	
    @NotEmpty
    @NotNull
	private String telefone;
	
}
