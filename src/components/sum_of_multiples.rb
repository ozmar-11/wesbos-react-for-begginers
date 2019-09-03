require 'pry'

class SumOfMultiples
	def initialize(*multiples)
		@multiples = multiples.uniq
	end

	def to(limit)
		multiples = clear_multiples(@multiples, limit)
		return 0 unless valid_multiples?(multiples)

		nums_to_sum = (1...limit).select do |current_number|
			multiples.any? { |multiple| current_number % multiple == 0 }
		end

		nums_to_sum.reduce(&:+)
	end

	private

	def valid_multiples?(multiples)
		multiples && multiples.length > 0 && multiples.reduce(&:+) > 0
	end

	def clear_multiples(multiples, limit)
		multiples.select {|multiple_number| multiple_number < limit }
	end
end

SumOfMultiples.new(1,2,3,3,4,4)