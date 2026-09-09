package dev.expense.Daily_Expense_Tracker.repository;

import dev.expense.Daily_Expense_Tracker.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {

    List<Expense> findByCategory(String category);
}