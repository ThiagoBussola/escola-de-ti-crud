package com.projeto.escola.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.escola.common.exception.RegistroNotFoundException;
import com.projeto.escola.common.exception.RequiredValueException;
import com.projeto.escola.entity.dto.PessoaDto;
import com.projeto.escola.service.PessoaService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/pessoas")
public class PessoaEndPoint {
	
	@Autowired
	private PessoaService pessoaService;
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public PessoaDto save(@RequestBody @Valid PessoaDto pessoaDto) throws RequiredValueException {
		return pessoaService.save(pessoaDto);
	}
	
	@DeleteMapping("/{id}")
	public void deletById(@PathVariable Long id) {
		pessoaService.deletById(id);
	}
	
	@PutMapping("/{id}")
	public PessoaDto updateById(@PathVariable Long id, @RequestBody @Valid PessoaDto pessoaDto) throws RegistroNotFoundException, RequiredValueException {
		return pessoaService.updateById(id, pessoaDto);
	}
	
	@GetMapping("/{id}")
	public PessoaDto findById(@PathVariable Long id) throws RegistroNotFoundException {
		return pessoaService.findById(id);
	}
	
	@GetMapping("/all")
	public Page<PessoaDto> findAllByOrderById(
			@RequestParam(value = "page", required = false, defaultValue = "0") int page,
			@RequestParam(value = "size", required = false, defaultValue = "10") int size) {
		Page<PessoaDto> pagee = pessoaService.findAllByOrderById(page, size);
		return pagee;
	}

}
