package com.projeto.escola.service;

import java.util.Objects;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.projeto.escola.common.exception.RegistroNotFoundException;
import com.projeto.escola.common.exception.RequiredValueException;
import com.projeto.escola.entity.Pessoa;
import com.projeto.escola.entity.dto.PessoaDto;
import com.projeto.escola.repository.PessoaRepository;

@Service
public class PessoaService {
	
	@Autowired
	private PessoaRepository pessoaRepository;
	
	@Autowired
    private ModelMapper modelMapper;
	
	public PessoaDto save(PessoaDto pessoaDto) throws RequiredValueException {
		if(Objects.isNull(pessoaDto.getNome()) || pessoaDto.getNome().isEmpty()) {
			throw new RequiredValueException("Nome");
		}
		
		if (pessoaDto.getContatoList().isEmpty() || Objects.isNull(pessoaDto.getContatoList())) {
			throw new RequiredValueException("Contatos");
		}
		
		Pessoa pessoa = toModel(pessoaDto);
		
		return toDto(pessoaRepository.save(pessoa));
		
	}
	
	public void deletById(Long id) {
		pessoaRepository.deleteById(id);
	}
	
	public PessoaDto updateById(Long id, PessoaDto pessoaDto) throws RegistroNotFoundException, RequiredValueException {
		if(Objects.isNull(pessoaDto.getNome()) || pessoaDto.getNome().isEmpty()) {
			throw new RequiredValueException("Nome");
		}
				
		Pessoa pessoa = toModel(this.findById(id));
		pessoa.setNome(pessoaDto.getNome());
		pessoa.setCpf(pessoaDto.getCpf());
		pessoa.setDataNascimento(pessoaDto.getDataNascimento());

		return toDto(pessoaRepository.save(pessoa));
		
	}
	
	public PessoaDto findById(Long id) throws RegistroNotFoundException {
		Pessoa pessoa = pessoaRepository.findById(id).orElseThrow(() -> new RegistroNotFoundException(id));
		return toDto(pessoa);
	}
	
	public Page<PessoaDto> findAllByOrderById(int page, int size) {
		Sort sort = Sort.by(Sort.Direction.ASC, "nome");
        Pageable pageable = PageRequest.of(page, size, sort);
                
		return pessoaRepository.findAllByOrderByNomeAsc(pageable).map(this::toDto);
	}
	
	
	public Pessoa toModel(PessoaDto pessoaDto) {
        return modelMapper.map(pessoaDto, Pessoa.class);
    }

    public PessoaDto toDto(Pessoa pessoa) {
        return modelMapper.map(pessoa, PessoaDto.class);
    }

}
