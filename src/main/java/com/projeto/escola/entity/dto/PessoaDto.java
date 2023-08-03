package com.projeto.escola.entity.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.validator.constraints.br.CPF;
import org.springframework.format.annotation.DateTimeFormat;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PessoaDto {
	
	private Long id;

    @NotNull
    @NotEmpty
	private String nome;
	
    @NotNull
    @NotEmpty
    @CPF
	private String cpf;
	
    @NotNull
    @Past
    @DateTimeFormat
	private LocalDate dataNascimento;
	
    @NotNull
    @NotEmpty
	@Valid
	private List<ContatoDto> contatoList = new ArrayList<>();

}
