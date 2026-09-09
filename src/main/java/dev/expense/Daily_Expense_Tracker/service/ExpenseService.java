package dev.expense.Daily_Expense_Tracker.service;

import dev.expense.Daily_Expense_Tracker.entity.Expense;
import dev.expense.Daily_Expense_Tracker.repository.ExpenseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {

    private final ExpenseRepository repository;

    public ExpenseService(ExpenseRepository repository) {
        this.repository = repository;
    }

    public Expense addExpense(Expense expense) {
        return repository.save(expense);
    }

    public List<Expense> getAllExpenses() {
        return repository.findAll();
    }

    public Expense getExpenseById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Expense not found"));
    }

    public Expense updateExpense(Long id, Expense expense) {
        Expense existing = getExpenseById(id);

        existing.setTitle(expense.getTitle());
        existing.setAmount(expense.getAmount());
        existing.setCategory(expense.getCategory());
        existing.setDate(expense.getDate());

        return repository.save(existing);
    }

    public void deleteExpense(Long id) {
        Expense expense = getExpenseById(id);
        repository.delete(expense);
    }

    public List<Expense> getByCategory(String category) {
        return repository.findByCategory(category);
    }
}