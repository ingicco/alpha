interface BarChartProps {
  className?: string
}

export function BarChart({ className }: BarChartProps) {
  const data = [
    { 
      label: 'AI Infrastructure', 
      value: 40,
    },
    { 
      label: 'Quantum Computing', 
      value: 25,
    },
    { 
      label: 'Biotechnology', 
      value: 20,
    },
    { 
      label: 'Sustainable Energy', 
      value: 15,
    },
  ]

  return (
    <div className={className}>
      <div className="p-4 sm:p-8">
        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-semibold text-accent-600 mb-2">Infrastructure Allocation</h3>
          <p className="text-sm sm:text-base text-neutral-600">Strategic focus across transformative technology sectors</p>
        </div>
        
        <div className="space-y-4 sm:space-y-6">
          {data.map((item, index) => (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="text-sm sm:text-base font-medium text-neutral-900">{item.label}</span>
                <span className="text-sm sm:text-base font-semibold text-neutral-900">{item.value}%</span>
              </div>
              
              <div className="w-full bg-neutral-100 rounded-full h-2">
                <div 
                  className="bg-primary-500 h-2 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
