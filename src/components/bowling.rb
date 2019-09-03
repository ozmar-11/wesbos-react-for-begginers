class Game
	def initialize
		@total_pins = 0
	end

	def roll(pins)
		@total_pins += pins
	end

	def score
		@total_pins
	end
end